if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let b={};const n=e=>a(e,c),f={module:{uri:c},exports:b,require:n};s[c]=Promise.all(i.map((e=>f[e]||n(e)))).then((e=>(r(...e),b)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/2cca2479-a57b524fb98a69f2.js",revision:"a57b524fb98a69f2"},{url:"/_next/static/chunks/445-f4f58a35213bf7de.js",revision:"f4f58a35213bf7de"},{url:"/_next/static/chunks/892-bc4c429c7f9062d5.js",revision:"bc4c429c7f9062d5"},{url:"/_next/static/chunks/946-7d301db8268e9017.js",revision:"7d301db8268e9017"},{url:"/_next/static/chunks/c16184b3-19e18d99a533fc71.js",revision:"19e18d99a533fc71"},{url:"/_next/static/chunks/framework-5429a50ba5373c56.js",revision:"5429a50ba5373c56"},{url:"/_next/static/chunks/main-dc32229139f8aaf1.js",revision:"dc32229139f8aaf1"},{url:"/_next/static/chunks/pages/%5Blang%5D/%5B...slug%5D-28fd27e40e8a7424.js",revision:"28fd27e40e8a7424"},{url:"/_next/static/chunks/pages/%5Blang%5D/list-93386bb4568309f7.js",revision:"93386bb4568309f7"},{url:"/_next/static/chunks/pages/%5Blang%5D/texts-a19908cb10b20506.js",revision:"a19908cb10b20506"},{url:"/_next/static/chunks/pages/_app-4310ae420af2ebd1.js",revision:"4310ae420af2ebd1"},{url:"/_next/static/chunks/pages/_error-5a00309fd5f4b49e.js",revision:"5a00309fd5f4b49e"},{url:"/_next/static/chunks/pages/articles/%5B...slug%5D-6e9d536954ef3943.js",revision:"6e9d536954ef3943"},{url:"/_next/static/chunks/pages/books/%5B...slug%5D-b61c242dd2eb48df.js",revision:"b61c242dd2eb48df"},{url:"/_next/static/chunks/pages/books/learn-lojban-a98acee119a4d2d5.js",revision:"a98acee119a4d2d5"},{url:"/_next/static/chunks/pages/humour/%5B...slug%5D-2f0a6f45f3405afb.js",revision:"2f0a6f45f3405afb"},{url:"/_next/static/chunks/pages/index-2c13eb2150e9d940.js",revision:"2c13eb2150e9d940"},{url:"/_next/static/chunks/pages/list-eea46fbccee8b5aa.js",revision:"eea46fbccee8b5aa"},{url:"/_next/static/chunks/pages/questions/%5B...slug%5D-9aab7dee63a985a0.js",revision:"9aab7dee63a985a0"},{url:"/_next/static/chunks/pages/texts/%5B...slug%5D-e8f827620fff7f1c.js",revision:"e8f827620fff7f1c"},{url:"/_next/static/chunks/pages/welcome-9302dcc517f246c6.js",revision:"9302dcc517f246c6"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-6ef43a8d4a395f49.js",revision:"6ef43a8d4a395f49"},{url:"/_next/static/css/1d8cb82b67c1bd21.css",revision:"1d8cb82b67c1bd21"},{url:"/_next/static/tJv5ok5kb9ZLVcAtBvqPb/_buildManifest.js",revision:"c85348c81e9077457f47a33a620cb02b"},{url:"/_next/static/tJv5ok5kb9ZLVcAtBvqPb/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/assets/favicons/browserconfig.xml",revision:"b3bb2fca64bf481078d2e01b4cdf70fd"},{url:"/assets/favicons/site.webmanifest",revision:"7cd392ff91d9d91efbf7a269b46b74de"},{url:"/assets/fonts/LinLibertine_R.otf",revision:"b06a933df90f327628f6287410ccd4df"},{url:"/assets/fonts/LinLibertine_RB.otf",revision:"a5edee4ec797ffb7fe8b2b3208b0f5aa"},{url:"/assets/fonts/LinLibertine_RBI.otf",revision:"cfa5f713d497ed77d0197fc84777e91d"},{url:"/assets/fonts/LinLibertine_RI.otf",revision:"7a38fb95f0f08b5821d08df73a659b1b"},{url:"/assets/icons/favicon.ico",revision:"2b8f4a308f730a2d9829b9d273aa0c3c"},{url:"/assets/icons/jbotcan.svg",revision:"e88ab4a43139b545a44e5c61e6604908"},{url:"/assets/icons/lojbo-150.png",revision:"fa46d7f46ef271488addc52770bc0b5d"},{url:"/assets/icons/lojbo-16.png",revision:"d8de680a7217cb185a6242bdc887fc52"},{url:"/assets/icons/lojbo-180.png",revision:"3bc0b14af711f53c9dd8fc318b2ac2d2"},{url:"/assets/icons/lojbo-192.png",revision:"f3e4e745af1ef89082f4102d96d98704"},{url:"/assets/icons/lojbo-32.png",revision:"c59ff92a43e7e28c50028d2b2e4890b6"},{url:"/assets/icons/lojbo-512.png",revision:"365c90930c6791f3c74b5cdcfe9070f6"},{url:"/assets/icons/lojbo.ico",revision:"1ce8e95a02560b531ce73d2fd7f09af7"},{url:"/assets/icons/lojbo.svg",revision:"9cd95d903a43c969388ee14e92ae1eba"},{url:"/assets/js/redirector.js",revision:"ccd9431fbb0da30bca83e715f5f0436d"},{url:"/assets/pixra/arxivo/sutysisku_simsa.png",revision:"b77095b78ad0221c20b59cc114493926"},{url:"/assets/pixra/arxivo/sutysisku_xraste.png",revision:"f29e5a5ed31c980b90d85bc00ce02d65"},{url:"/assets/pixra/books/prostaya-logika/1.svg",revision:"5f20ba428cd9c86f714c8433535e71c6"},{url:"/assets/pixra/books/prostaya-logika/11.webp",revision:"5cb0f9f0666b0a6ec31b19125a8856ee"},{url:"/assets/pixra/books/prostaya-logika/12.webp",revision:"0e5dd08703819c1abb7f22cd319d0542"},{url:"/assets/pixra/books/prostaya-logika/13.webp",revision:"ee0c625cef20a8e86f63086c16376437"},{url:"/assets/pixra/books/prostaya-logika/14.webp",revision:"83742644078042511844a82c780beb27"},{url:"/assets/pixra/books/prostaya-logika/16.webp",revision:"5e60acec344d9774937ae533791446ee"},{url:"/assets/pixra/books/prostaya-logika/19.webp",revision:"8b9dd852c8ce4ea1a163ddb647a70292"},{url:"/assets/pixra/books/prostaya-logika/2.svg",revision:"4716da2b75f818365030b58c9dacea01"},{url:"/assets/pixra/books/prostaya-logika/22.webp",revision:"1a515976a612e5b7001f41b744935bdf"},{url:"/assets/pixra/books/prostaya-logika/23.webp",revision:"f9f7708213f8dc8e7d05f89e5fe3395b"},{url:"/assets/pixra/books/prostaya-logika/25.webp",revision:"a972bf131cc511bf0dd9b6947473f87a"},{url:"/assets/pixra/books/prostaya-logika/3.svg",revision:"4a359757d339b81a08009dfef6704666"},{url:"/assets/pixra/books/prostaya-logika/4.svg",revision:"aa21a2ca31aefe413ff65fea293ac4fd"},{url:"/assets/pixra/books/prostaya-logika/5.svg",revision:"f29f6933c9f757601f18625f38d70386"},{url:"/assets/pixra/books/prostaya-logika/6.svg",revision:"485e94bea8d2ea59b42e29285910e5d9"},{url:"/assets/pixra/books/prostaya-logika/7.svg",revision:"676e7cc1ff0f7f8945524fb74cab93a1"},{url:"/assets/pixra/books/prostaya-logika/8.svg",revision:"31017c5b427e7de138d693d394fd0b61"},{url:"/assets/pixra/books/prostaya-logika/9.webp",revision:"6b404df7a22d620c5eac7ea3ff645a07"},{url:"/assets/pixra/cilre/badna.webp",revision:"beee200ac544e5274a9db5436f7e3e83"},{url:"/assets/pixra/cilre/badri.webp",revision:"372df92f3537d7a28c430079d54245ff"},{url:"/assets/pixra/cilre/baho_carvi.webp",revision:"02d292b342dcafdcef9ea180dd0cca47"},{url:"/assets/pixra/cilre/bajra.webp",revision:"569e11c8f6f6f0b80066605447f3e98a"},{url:"/assets/pixra/cilre/bekpi.png",revision:"ba85a777abb7656de734c7ee9b112325"},{url:"/assets/pixra/cilre/bekpi.webp",revision:"c900c5e2ebee6d187b70c1a87fed3907"},{url:"/assets/pixra/cilre/bilma.webp",revision:"19d7fd5871ffcaf74b0a148b5cdfe3b5"},{url:"/assets/pixra/cilre/carvi.webp",revision:"2084fa06fa0de99ba5a012ac8cd925e7"},{url:"/assets/pixra/cilre/casnu.webp",revision:"82952184765a9f73a53c7e3603083056"},{url:"/assets/pixra/cilre/cerni.webp",revision:"e83df96f41479f0de147b5650e278d0a"},{url:"/assets/pixra/cilre/ci_prenu.webp",revision:"cb63d1ceabd959fecaa63094f73bf975"},{url:"/assets/pixra/cilre/cinba3.webp",revision:"1802138c1e47ae8313569279cfb92081"},{url:"/assets/pixra/cilre/ciska.webp",revision:"88de14ce44215302244d40daf5851ebe"},{url:"/assets/pixra/cilre/cisma.webp",revision:"f84ea85338faaa1c32738670ee9d9ab1"},{url:"/assets/pixra/cilre/citka.webp",revision:"60e7a1ecdc89dc4912a3abaaab46de7c"},{url:"/assets/pixra/cilre/ckafi.webp",revision:"c00be03eb14036f4d1d1c8f8a08caea1"},{url:"/assets/pixra/cilre/clira.webp",revision:"234bb7abea85a289410818ce5977f384"},{url:"/assets/pixra/cilre/cmalu_karce.webp",revision:"2a2281a2077778c6aa684367f339689c"},{url:"/assets/pixra/cilre/cmana.webp",revision:"7ca948d77ea4afc8f5535397745cc4b6"},{url:"/assets/pixra/cilre/cmila.webp",revision:"d2a9a0b7a741b116e660291a4ce02024"},{url:"/assets/pixra/cilre/coha_cikna.webp",revision:"9713546a753f5918ea45a492d1a80fc8"},{url:"/assets/pixra/cilre/coha_cikna2.webp",revision:"3a60807227e3090bc5a46e3e6e81d78e"},{url:"/assets/pixra/cilre/coha_purdi.webp",revision:"0749ef4dcdb7a9c0e1f315966228875d"},{url:"/assets/pixra/cilre/coha_viska.webp",revision:"24898d49cd9145c7de86190370a56417"},{url:"/assets/pixra/cilre/coho.webp",revision:"992075f0708217e4cdd044bcec04c618"},{url:"/assets/pixra/cilre/cohu_purdi.webp",revision:"76891022b23735233079464c71518008"},{url:"/assets/pixra/cilre/coi.webp",revision:"50f2b9cbeef608467219e4e0220b6362"},{url:"/assets/pixra/cilre/cortu.webp",revision:"195a684f2c5cb7f1dd152a8b12cdbf7d"},{url:"/assets/pixra/cilre/ctuca.webp",revision:"712e430feb4bc6d78d8f7ff0dc57c474"},{url:"/assets/pixra/cilre/ctuca0.webp",revision:"be4e78ee9b2db7c8b9850fb1d1530df5"},{url:"/assets/pixra/cilre/dansu.webp",revision:"7137111d7073f03a26c080910852c646"},{url:"/assets/pixra/cilre/deha_vasxu.webp",revision:"13bbf1eac4c2a016183e7733f3138d0f"},{url:"/assets/pixra/cilre/diha_vasxu.webp",revision:"5cb0ad37af150aec816d29e76e1fc5e7"},{url:"/assets/pixra/cilre/dirgo.webp",revision:"5bf572a24083ea5063d00b6637a2ae6d"},{url:"/assets/pixra/cilre/djica_tuha_le_titla.webp",revision:"9aaa2448ee254f8ea7eb87dae6773917"},{url:"/assets/pixra/cilre/do.webp",revision:"d8c73f6c6a0c3b8f9bebe3edcebb0fe6"},{url:"/assets/pixra/cilre/do_e_mi_nintadni.webp",revision:"d434bfbcf97aa2432a0394b200f5ed45"},{url:"/assets/pixra/cilre/donri.webp",revision:"05d8898901e226c6548f48a602d1ac64"},{url:"/assets/pixra/cilre/dzena.webp",revision:"d39f008a67b727126a29c1d5c236e27b"},{url:"/assets/pixra/cilre/fengu.webp",revision:"fbf1b615fb86b6724a41f95051792e7e"},{url:"/assets/pixra/cilre/galxykafke.webp",revision:"eabfbace2b0ef9a56cd606b012e8927d"},{url:"/assets/pixra/cilre/gleki.webp",revision:"94604bd0b827c80113a1d47855641163"},{url:"/assets/pixra/cilre/jinru.webp",revision:"15d8e90bda15ef9477941528e10ae516"},{url:"/assets/pixra/cilre/jundi.webp",revision:"fd33772f4e50afe2602e2c36597c503b"},{url:"/assets/pixra/cilre/karce.webp",revision:"dcd7fbfb7d662b4b7e532c1a7f02fa1f"},{url:"/assets/pixra/cilre/klama_fi.webp",revision:"3ae4c191f38afa4e74c597199c1cfb14"},{url:"/assets/pixra/cilre/klama_ti.webp",revision:"488072aad4a73d80864949deddf82cce"},{url:"/assets/pixra/cilre/laldo.webp",revision:"c2a515514b6fef1c612d222c1eee08f1"},{url:"/assets/pixra/cilre/le_gerku_faha_plipe.webp",revision:"c5ab4b4758043a9f777fb9735bf185e7"},{url:"/assets/pixra/cilre/le_plise_cu_kukte.webp",revision:"bc5cf13ce92397794ca3f443d9df1b34"},{url:"/assets/pixra/cilre/le_prenu_cu_senva_tuha_le_nei.webp",revision:"20b4d7056f1ffca958b2f1931e7c153e"},{url:"/assets/pixra/cilre/le_prenu_cu_tirna_lei_djacu.webp",revision:"95ef313fd780026317e1a085d9e2ca87"},{url:"/assets/pixra/cilre/le_prenu_e_le_gerku.webp",revision:"9b2f6cbac238da79aeb623274266556a"},{url:"/assets/pixra/cilre/le_tricu_cu_barda.webp",revision:"74384a8a3a6438018212f9127d904294"},{url:"/assets/pixra/cilre/le_tricu_cu_barda0.webp",revision:"a08de5c12bb5598cb57b343c14fd0e31"},{url:"/assets/pixra/cilre/le_vehi_ja_vehu_cmana.webp",revision:"aee10a3375b8c56208ef54a2366cd7b8"},{url:"/assets/pixra/cilre/lumci.webp",revision:"bc63b0c8ba81d48f4576a31d747270a9"},{url:"/assets/pixra/cilre/melbi_je_cmalu_zdani.webp",revision:"6abff666d89ad33921ba8f0e74f3c115"},{url:"/assets/pixra/cilre/melbi_zdani.webp",revision:"445e3a229f1242504c420954a35fe7b4"},{url:"/assets/pixra/cilre/mi.webp",revision:"bbe94ff0d3de21b0072c3bbf8da96ce1"},{url:"/assets/pixra/cilre/mi_prami_do.webp",revision:"11da1875040cf2cbfa9979310652906c"},{url:"/assets/pixra/cilre/mi_prami_do2.webp",revision:"50de2b0727e7b320ed0a1fe3965a9251"},{url:"/assets/pixra/cilre/mohu_klama.webp",revision:"05311ac22468f681dc6873b44a0bfe95"},{url:"/assets/pixra/cilre/mohu_klama_le_tcana.webp",revision:"7f1069296cebda96a3633da0aab7a319"},{url:"/assets/pixra/cilre/na_jimpe.webp",revision:"9d874be0d6ec4d3a8fd113fb99295438"},{url:"/assets/pixra/cilre/najnimre.webp",revision:"16ddbd9de02fe3ccd7e400d0196cb807"},{url:"/assets/pixra/cilre/nanmu.webp",revision:"f4814ebbee5c3fd2f070fcb8c657af0a"},{url:"/assets/pixra/cilre/nicte.webp",revision:"5d1b844e20acedd3e94ceab745ccf1d4"},{url:"/assets/pixra/cilre/nicte_fi_mi.webp",revision:"c1db160c8f092d218189eaa79d183a7d"},{url:"/assets/pixra/cilre/niha_le_tricu.webp",revision:"3731e83b554887c4bb402995f675b91f"},{url:"/assets/pixra/cilre/ninmu.webp",revision:"5d342ceb7fc4ba4339dc28e11ee8bdf4"},{url:"/assets/pixra/cilre/nintadni.webp",revision:"e5a46e6e37a36e857b59a4d628209335"},{url:"/assets/pixra/cilre/nurma.webp",revision:"d8372e2c012f58bdeb4ad22c819cd0ff"},{url:"/assets/pixra/cilre/panka_ninmu.webp",revision:"b613877604084f2d6390acb404f0e2ab"},{url:"/assets/pixra/cilre/pendo.webp",revision:"9471c469a739b5f9c88689e04adb321c"},{url:"/assets/pixra/cilre/pilno_le_fonxa.webp",revision:"71db98aae2095a1ad62ecf8a3087aed4"},{url:"/assets/pixra/cilre/pinxe_fi_le_kabri.webp",revision:"3ecafcd2daf6f789fa938860ceab297a"},{url:"/assets/pixra/cilre/pinxe_le_djacu.webp",revision:"6fb03f73749436921aed13efc526ecb6"},{url:"/assets/pixra/cilre/pinxe_le_jisra.webp",revision:"2e154e3d82fe18df589bbe6a24ac2e27"},{url:"/assets/pixra/cilre/plicru.webp",revision:"e5fe4d15fbb51f8f8539e00a5175ad4d"},{url:"/assets/pixra/cilre/puho_nenri.webp",revision:"531d0ec76c9bf3715ae9ec89ac5bdca7"},{url:"/assets/pixra/cilre/rinsa.webp",revision:"ef8d98e4cb6e310315c03464fc46b1bb"},{url:"/assets/pixra/cilre/rinsa2.webp",revision:"f3e32987e4ef5cc0e958583710516b4e"},{url:"/assets/pixra/cilre/se_vrusi_lo_ka_kukte.webp",revision:"5fab3616cca7199cd0352a5fc9d09286"},{url:"/assets/pixra/cilre/senci.webp",revision:"1bab525e8ded243b6afd45d65fdcf9d8"},{url:"/assets/pixra/cilre/sidju.webp",revision:"ae3d61c4d1e60cbf572e659864078eb7"},{url:"/assets/pixra/cilre/simxu prami.webp",revision:"30b6ba5489187f3be0998a74eaf10e08"},{url:"/assets/pixra/cilre/simxu_tunba.webp",revision:"dfccf5d4274725f2d2558344dbe7acef"},{url:"/assets/pixra/cilre/sipna.webp",revision:"c048e7e17b842506b85e60f6de71bd04"},{url:"/assets/pixra/cilre/sipna_zeha.webp",revision:"28c2d9fbb1723e58a22e75a07c2d7c87"},{url:"/assets/pixra/cilre/sruri.webp",revision:"9261d8b096a57f6f97368274213f7d51"},{url:"/assets/pixra/cilre/sruri_since.webp",revision:"b2554d765081b2cd3d7504c02f67b4a2"},{url:"/assets/pixra/cilre/stati.webp",revision:"5dc664709f0eaedb42c1217f88e985cb"},{url:"/assets/pixra/cilre/sumne.webp",revision:"ca15361217e1dbc354cc6c69697dfc30"},{url:"/assets/pixra/cilre/ta.webp",revision:"5c64f7f2543e36aa16f3e7ce3b74bbab"},{url:"/assets/pixra/cilre/tadni.webp",revision:"32499fa7120f152c1d0f97a20f8c1d5f"},{url:"/assets/pixra/cilre/taske.webp",revision:"1837e02b2b264669f566033fc3b6dcb8"},{url:"/assets/pixra/cilre/tavla.webp",revision:"38d9bb4e880c0c4fed73ff96e9d6f169"},{url:"/assets/pixra/cilre/tavla0.webp",revision:"5e5da5f8ae1c222238ac7cffd33fe95d"},{url:"/assets/pixra/cilre/tavla1.webp",revision:"715129ef52fb5bb73d48fd227fc38435"},{url:"/assets/pixra/cilre/tavla_le_pendo.webp",revision:"38107c70414aa9415455e07ea2677320"},{url:"/assets/pixra/cilre/tcati.webp",revision:"859f27126b3164d1656b92dc18fdc342"},{url:"/assets/pixra/cilre/tcidu_la_lojban.webp",revision:"71fa3bd89138f63fa2bc6aad98e1c4af"},{url:"/assets/pixra/cilre/ti.webp",revision:"ac11a41becb8599396ece3cf9d9699d0"},{url:"/assets/pixra/cilre/tinjuhi.webp",revision:"8b1388757d07da087dededa912c7bf53"},{url:"/assets/pixra/cilre/troci_cadzu.webp",revision:"b9386376eca620f50ac2c9b565584661"},{url:"/assets/pixra/cilre/tsani.webp",revision:"8875cba789500406a7f15e316338cea5"},{url:"/assets/pixra/cilre/tu.webp",revision:"a96c0f76cb2943c05f8bbc3b65c338ff"},{url:"/assets/pixra/cilre/tunba.webp",revision:"f5cbe744297f69c6df0264305b12bc4d"},{url:"/assets/pixra/cilre/ui_jinga.webp",revision:"bf7bc3e5cc050d8f0e5837548f49a61b"},{url:"/assets/pixra/cilre/vanci.webp",revision:"9d97dc4c7404995c9c7555ad0305da87"},{url:"/assets/pixra/cilre/viha_pixra.webp",revision:"02abb2216a63667b8befcd3e07f0c102"},{url:"/assets/pixra/cilre/vihu_pixra.webp",revision:"04ce87f1c80143ebef742da029df6ca5"},{url:"/assets/pixra/cilre/viku_cizra.webp",revision:"35a7063f5adf9bf197dd709752e731b3"},{url:"/assets/pixra/cilre/voi.webp",revision:"1265866e4afb131ffff2a537212825bb"},{url:"/assets/pixra/cilre/xadni.webp",revision:"0e301fc77a948a4fde8da3d9cdc1161c"},{url:"/assets/pixra/cilre/xadni1.png",revision:"2982a0271276e087f9d3b8450ce32fc5"},{url:"/assets/pixra/cilre/xadni1.svg",revision:"df48e1ade8e84ce65ac4cd6ebc53f1d1"},{url:"/assets/pixra/cilre/xadni1.webp",revision:"acb9d86237540643e7507f737806c46a"},{url:"/assets/pixra/cilre/xadni2.svg",revision:"6610cea393ef674df2f2cee24386e90d"},{url:"/assets/pixra/cilre/xadni2.webp",revision:"5d2e12ce20ee201eaf6121c89b6f7d7e"},{url:"/assets/pixra/cilre/xagji.webp",revision:"dcecf63844f016c23246301bdde16d88"},{url:"/assets/pixra/cilre/xrula.webp",revision:"6ab0c6ce0010792f0a9e85dc7302c95d"},{url:"/assets/pixra/cilre/zarci.webp",revision:"7d9fb52c10d7ff988c50f1d950a58830"},{url:"/assets/pixra/cilre/zgana_le_sefta.webp",revision:"72b8639c45d084a97114641bc87bbb55"},{url:"/assets/pixra/cilre/zgana_le_skina.webp",revision:"a6c349112fd8afcb0802b14e5f8f9d02"},{url:"/assets/pixra/cilre/zgana_le_vrusi.webp",revision:"9f8c271640fc2dcc250896b979315142"},{url:"/assets/pixra/ralju/jduli.svg",revision:"65d332ec97619cf5756ef6869ddcabeb"},{url:"/assets/pixra/ralju/texts.svg",revision:"0342b7a3ff27f2c367e54ed3e11de02b"},{url:"/assets/pixra/ralju/texts.webp",revision:"d85785aa7fc4fae1405ba673b8f04055"},{url:"/assets/pixra/ralju/xuncku.webp",revision:"7bbd742c4a3fb924410fe291c2be8f60"},{url:"/assets/pixra/ralju/xuncku2.webp",revision:"49249127f4a5ea8a744b2758f235d689"},{url:"/assets/pixra/texts/how-the-enemy-came-to-thlunrana/2.png",revision:"2cb1f3f1a7c502a67ab44a21cc2e6584"},{url:"/assets/pixra/texts/the-book/16.svg",revision:"bd7edbe8e4d2581202217bbbd230aad0"},{url:"/assets/pixra/texts/the-book/27.svg",revision:"c839c1f2ffbfeacb7ecd8da6d10bf0c1"},{url:"/assets/pixra/texts/the-book/31.svg",revision:"3a16d1b5c212a395015d90f068030ee3"},{url:"/assets/pixra/texts/the-book/38.svg",revision:"b9de8c3ee5363fb372f3bef0e2ceb087"},{url:"/assets/pixra/texts/the-book/42.svg",revision:"4ded92af7d9694debda54df7d93843f3"},{url:"/assets/pixra/texts/to-kill-a-child/25.svg",revision:"cfdb1c345cad6ebc9ebaafec7c60a3e4"},{url:"/assets/pixra/texts/to-kill-a-child/28.svg",revision:"b81fc3218761d6173998019cbe513e91"},{url:"/assets/pixra/texts/to-kill-a-child/47.svg",revision:"3d588dfe1a101cc2ea069fa421b2af71"},{url:"/assets/pixra/texts/to-kill-a-child/8.svg",revision:"05d0d32a7556253f7a9674e41f0b6531"},{url:"/assets/pixra/velsku/discord.svg",revision:"3437c10597c1526c3dbd98c737c2bcae"},{url:"/assets/pixra/velsku/slack.png",revision:"b1f8fe35670f3227c424227ddf39c60f"},{url:"/assets/pixra/velsku/telegram.svg",revision:"20154f45f553e0aa5171bac3975441d1"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
