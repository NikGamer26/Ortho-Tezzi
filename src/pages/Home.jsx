import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Categories, SortPopup, ProductCard, Skeleton } from '../components';

import {
  fetchProducts,
  fetchProductsCategories,
} from '../redux/actions/products';
import { addProductToCart, fetchCartStatistic } from '../redux/actions/cart';

const sortItems = [
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
  { name: 'дате', type: 'created_at', order: 'desc' },
];

function Home() {
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }) => user);
  const { categories, products, loading } = useSelector(
    ({ products }) => products
  );
  const [activeCategoryName, setActiveCategoryName] = useState(null);
  const [activeSort, setActiveSort] = useState(sortItems[0]);
  const history = useHistory();
  useEffect(() => {
    dispatch(fetchProductsCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      fetchProducts({
        sorting:
          activeSort.order === 'desc' ? '-' + activeSort.type : activeSort.type,
        category: activeCategoryName,
      })
    );
  }, [dispatch, activeSort, activeCategoryName]);

  const onAddToCart = async (product) => {
    if (user) {
      await dispatch(addProductToCart(product));
      dispatch(fetchCartStatistic());
    } else history.push('/login');
  };

  return (
    <div className="container">
      <div className="content__top">
        {categories && (
          <Categories
            activeCategory={activeCategoryName}
            onClickCategory={setActiveCategoryName}
            items={categories}
          />
        )}

        <SortPopup
          activeSort={activeSort}
          items={sortItems}
          onClickSort={setActiveSort}
        />
      </div>
      <h2 className="content__title">Все товары</h2>
      <div className="content__items">
        {!loading
          ? products?.map((product) => (
              <ProductCard
                key={product.id}
                types={categories}
                onAddToCart={onAddToCart}
                {...product}
              />
            ))
          : Array(19)
              .fill(0)
              .map((_, index) => <Skeleton key={index} />)}
      </div>
    </div>
  );
}

export default Home;
