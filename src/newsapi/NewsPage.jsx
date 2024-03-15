import Categories from "./Categories"
import NewsList from "./NewsList"

const NewsPage = ({ match }) => {
    //카테고리가 선택되지 않았으면 기본값 all로 사용
    const category = match.params.category || 'all';
  return (
    <div>
        <Categories/>
        <NewsList category={category}/>
    </div>
  )
}

export default NewsPage