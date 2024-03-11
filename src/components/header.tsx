import Link from "next/link";
/* This example requires Tailwind CSS v2.0+ */
import { Popover, Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import { closeXicon } from "../lib/buttons";
import { header } from "../config/config";
import { TocElem } from "../types/toc";
import { debouncedGetClosestHeaderId, getClosestHeaderId } from "../lib/toc";
import { Items } from "../lib/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faScroll } from "@fortawesome/free-solid-svg-icons";

// const profile = ['Your Profile', 'Settings', 'Sign out']

type TocItem = {
  name: string;
  url: string;
  depth: number;
};

const buttonClass = `text-black in-topbar-toc hover:no-underline px-3 py-2 text-sm font-medium overflow-ellipsis`;

export default function Header({
  toc = [],
  path = "",
  allPosts = [],
  currentLanguage = "en",
}: {
  toc?: TocElem[];
  path?: string;
  allPosts?: Items[];
  currentLanguage?: string;
}) {
  const listToC: TocItem[] = toc.map((tocElem) => ({
    depth: parseInt(tocElem.depth),
    name: tocElem.value,
    url: `${path}#${tocElem.id}`,
  }));
  const hasToC = listToC.length > 0;
  const header_ = header.map((item) => {
    const foundTitle = allPosts
      .reduce((acc, post) => {
        const slug = "/" + post.slug.join("/");
        const localizedUrl = `/${currentLanguage}` + item.url;
        if ([item.url, localizedUrl].includes(slug)) {
          acc.push({
            slug: post.slug,
            url: localizedUrl,
            name: post.title,
            directory: post.slug[0],
            coverImage: post.coverImage,
          });
        }
        return acc;
      }, [] as Items[])
      .sort((a, b) => {
        if (a.directory === currentLanguage) return -1;
        return 0;
      })[0];
    return { ...item, foundTitle };
  });

  return (
    <Popover
      as="nav"
      className="sticky top-0 z-50 bg-deep-orange-400 shadow-md print:hidden"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-12">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link href={`/${currentLanguage}/welcome`}>
                    <img
                      className="logo"
                      src="/assets/pixra/ralju/pluka_lanci.svg"
                      alt="Lojban logo"
                    />
                  </Link>
                </div>

                <div className="hidden lg:block">
                  <div className="ml-5 flex items-baseline space-x-3">
                    {header_.map((item) => {
                      const { coverImage } = item.foundTitle;
                      return (
                        <Link
                          href={
                            !!item.foundTitle
                              ? (item.foundTitle.url as string)
                              : item.url
                          }
                          key={item.url}
                          className="mt-auto"
                        >
                          <button
                            className={`h-8 flex-shrink-0 bg-deep-orange-300 text-gray-100 text-base leading-none px-4 rounded shadow-md hover:bg-deep-orange-200 focus:outline-none flex items-center`}
                            // style={{
                            //   backgroundImage: `url('${coverImage}')`,
                            //   backgroundPosition: "right",
                            //   backgroundRepeat: "no-repeat",
                            //   backgroundSize: "auto 100%",
                            // }}
                          >
                            {/* {item.ogImage && <img src={item.ogImage} className="h-7 mr-2"/>} */}
                            <span className="py-1">
                              {!!item.foundTitle
                                ? (item.foundTitle.name as string)
                                : item.name}
                            </span>
                          </button>
                        </Link>
                      );
                    })}
                    {/* <div className="stork-wrapper">
                      <input data-stork="federalist" className="stork-input" />
                      <div data-stork="federalist-output" className="stork-output"></div>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <Menu as="div" className="ml-3 relative">
                    {({ open }) => (
                      <>
                        <div>
                          <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            static
                            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                          >
                            {profile.map((item) => (
                              <Menu.Item key={item}>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                               ms     {item}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                </div>
              </div> */}
              <div className="-mr-2 flex lg:hidden">
                {/* Mobile menu button */}
                <Popover.Button
                  onClick={() => {
                    getClosestHeaderId();
                  }}
                  className="select-none bg-deep-orange-400 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-deep-orange-400 focus:outline-none"
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      id="xicon"
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Popover.Button>
              </div>
            </div>
          </div>

          <Popover.Panel className="lg:hidden bg-gray-100 shadow-lg">
            {/* favs */}
            <div className="px-2 pt-2 space-y-1 sm:px-3">
              {header_.map((item) => {
                return (
                  <Link
                    href={
                      !!item.foundTitle
                        ? (item.foundTitle.url as string)
                        : item.url
                    }
                    key={item.url}
                    onClick={() => {
                      closeXicon();
                    }}
                    className={`block border-b last:border-b-0 hover:text-deep-orange-600 ${buttonClass}`}
                  >
                    {!!item.foundTitle
                      ? (item.foundTitle.name as string)
                      : item.name}
                  </Link>
                );
              })}
            </div>

            {/* title */}
            {hasToC && (
              <>
                <h1 className={`flex bg-gray-200 ${buttonClass}`}>
                  <FontAwesomeIcon icon={faScroll} className="h-6" />
                  <FontAwesomeIcon icon={faList} className="ml-2 h-6" />
                </h1>

                {/* toc */}
                <nav className="toc w-full md:w-1/5 p-2 bottom-0 md:top-20 h-48 md:h-screen font-medium text-sm overflow-ellipsis">
                  <div
                    id="toc-topbar"
                    className="h-full px-2 pb-3 space-y-1 sm:px-3 overflow-y-auto"
                  >
                    {listToC.map((item) => (
                      <Link
                        href={item.url}
                        key={item.url}
                        onClick={() => {
                          closeXicon();
                        }}
                        className={`block border-b hover:text-deep-orange-600 ${buttonClass} lme-ml-${
                          (item.depth - 2) * 2
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </nav>
              </>
            )}

            {/* archive */}
            {/* <div className="px-2 pb-3 space-y-1 sm:px-3 h-4/5 overflow-y-auto">
              {toc_list.map((item) =>
                <Link href={item.url} key={item.name}>
                  <a onClick={() => {
                    closeXicon()
                  }} className={`bg-deep-orange-900 text-white block px-3 py-2 rounded-md text-base font-medium overflow-ellipsis ml-${(item.depth - 2)*2}`}>
                    {item.name}
                  </a>
                </Link>
              )}
            </div> */}
            {/* <div className="pt-4 pb-3 border-t border-deep-orange-700">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">Tom Cook</div>
                  <div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
                </div>
                <button className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 px-2 space-y-1">
                {profile.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div> */}
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}
