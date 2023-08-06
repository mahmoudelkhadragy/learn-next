import Link from "next/link";

export const metadata = {
  title: "articles"
}

export default function ({children}) {
  return(
    <div className="articles-wrapper">
      <h1>Articles</h1>
      <div className="sidenav">
        <Link href="/articles/favourite-articles">Favourite Articles</Link>
      </div>
      <div className="article_wrapper">{children}</div>
    </div>
  )
};
