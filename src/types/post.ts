import Author from './author'
import { TocElem } from './toc'


type PostType = {
  slug: string[]
  hidden?: boolean
  "meta.title"?: string
  title: string
  date: string
  coverImage: string
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
  toc?: TocElem[]
}

export default PostType
