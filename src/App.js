import { useReducer, useState } from 'react';
import Meals from './components/Meals/Meals';
import CartContext from './store/cartContext';
import FilterMeals from './components/FilterMeals/FilterMeals';
import Cart from './components/Cart/Cart';

// 模擬一組食物數據
const Meals_Data = [
  {
    id: '1',
    title: '雙層麥香雞',
    desc: '兩片麥香雞排超滿足，經典美味再加倍!酥嫩麥香雞排搭配新鮮生菜，淋上特製醬料，通通夾進撒上芝麻顆粒的滿意麵包!熟悉經典美味，雙層口感，大大滿足。',
    price: 79,
    img: '/img/41384.png',
  },
  {
    id: '2',
    title: '大麥克',
    desc: '麥當勞永遠的一號餐， 全球狂熱50年， 紐澳100%雙層純牛肉， 淋上大麥克招牌醬料， 加上生菜、吉事、洋蔥、酸黃瓜， 美味層層堆疊，口感樂趣無窮。 從美國總統到素人都是鐵粉， 經濟學家還發明「大麥克指數」致敬，果然，只有大麥克，才是大麥克！',
    price: 80,
    img: '/img/1095.png',
  },
  {
    id: '3',
    title: '雙層牛肉吉事堡',
    desc: '紐澳雙層100%優質牛肉， 搭配雙層切達吉事片， 酸黃瓜、洋蔥在裡面， 芥末醬、番茄醬淋上去， 層出不窮的經典滋味， 真的沒在跟你客氣的。',
    price: 70,
    img: '/img/1098.png',
  },
  {
    id: '4',
    title: '嫩煎雞腿堡',
    desc: '低熱量的清爽美味，捨我其誰。 獨特的BBQ風味醬，搭配多汁去骨雞腿肉，以慢火嫩煎入味，意料之外的絕配。 加上大片牛番茄與三道水洗新鮮生菜，清爽感加乘，喜歡就醬吃，越吃越順口！',
    price: 80,
    img: '/img/41322.png',
  },
  {
    id: '5',
    title: '麥脆雞腿',
    desc: '炸雞，就要麥脆雞。 獨一無二「黃金美味3要點」，大腿棒腿一起來！ 脆皮炸雞使用嚴選帶骨雞腿，堅持三道裹粉五道翻滾，表皮酥脆有層次！ 首創先烤後炸工法，高溫鎖住肉汁，給你嫩、脆、爽的好滋味！一口吃下，你也會這樣說。',
    price: 60,
    img: '/img/41328.png',
  },
  {
    id: '6',
    title: '雙層麥克雞塊 (6塊)',
    desc: '嚴選優質雞肉， 以雞胸和雞腿黃金比例調配，並依照麥當勞全球產品規範，以天然澱粉取代雞肉中做為保水成分的合法食品添加物-磷酸鹽，讓美味更簡單！口感外酥內軟，搭上經典醣醋醬， 酸酸甜甜越吃越順口；還有多款沾醬，讓吃法充滿樂趣，男女老少都愛吃！你呢？今天麥克雞塊了嗎？',
    price: 64,
    img: '/img/31371.png',
  },
  {
    id: '7',
    title: '麥香魚',
    desc: '選用來自純淨海域的100%真鱈魚製成現炸魚排，佐以濃郁酸甜塔塔醬與1/2片切達起司，再蓋上柔軟「蒸」麵包，麥香魚的美味魔力，讓所有人都不自覺著迷！',
    price: 60,
    img: '/img/1229.png',
  },
];

// 定義cartReducer
const cartReducer = (cartData, action) => {
  // console.log(cartData);
  // console.log(action);
  // 淺複製購物車
  const newCart = { ...cartData };
  switch (action.type) {
    default:
      return cartData;

    case 'ADD':
      // 檢查購物車中是否已存在該商品,如果不存在，將商品添加到購物車
      if (newCart.items.indexOf(action.meal) === -1) {
        newCart.items.push(action.meal);
        // 設置商品數量為1
        action.meal.amount = 1;
      } else {
        // 如果已存在，增加商品數量
        action.meal.amount += 1;
      }
      // 增加總商品數量
      newCart.totalAmount += 1;
      // 總價格計算
      newCart.totalPrice += action.meal.price;
      // 返回更新後的購物車
      return newCart;

    case 'REMOVE':
      // 減少商品數量,如果商品數量為0，從購物車中移除該商品
      action.meal.amount -= 1;
      if (action.meal.amount === 0) {
        newCart.items.splice(newCart.items.indexOf(action.meal), 1);
      }
      // 減少總商品數量
      newCart.totalAmount -= 1;
      // 總價格計算
      newCart.totalPrice -= action.meal.price;
      // 返回更新後的購物車
      return newCart;

    case 'CLEAR':
      newCart.items.forEach((item) => delete item.amount);
      newCart.items = [];
      newCart.totalAmount = 0;
      newCart.totalPrice = 0;
      return newCart;
  }
};

function App() {
  // 創建state用來存放食物列表
  const [mealsData, setMealsData] = useState(Meals_Data);
  const [noResults, setNoResults] = useState(false); //用來追踪搜尋是否有結果

  // 創建state 存購物車數據
  // 商品.商品總數量.商品總價格
  // const [cartData, setCartData] = useState({
  //   items: [],
  //   totalAmount: 0,
  //   totalPrice: 0,
  // });改為使用Reducer 如下
  const [cartData, cartDispatch] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
    totalPrice: 0,
  });

  // // 向購物車添加商品
  // function addItem(meal) {
  //   // meal要添加到購物車的商品
  //   // 淺複製
  //   const newCart = { ...cartData };
  //   // 判斷該購物車中是否存在該商品 進判斷為沒有這件商品
  //   if (newCart.items.indexOf(meal) === -1) {
  //     // 將meal添加到購物車
  //     newCart.items.push(meal);
  //     // 修改商品數量
  //     meal.amount = 1;
  //   } else {
  //     //商品已存在購物車當中 增加商品數量
  //     meal.amount += 1;
  //   }
  //   // 增加總數
  //   newCart.totalAmount += 1;
  //   // 總金額
  //   newCart.totalPrice += meal.price;
  //   setCartData(newCart);
  // }

  // // 減少商品數量
  // function removeItem(meal) {
  //   const newCart = { ...cartData };
  //   // 減少商品數量
  //   meal.amount -= 1;
  //   // 移除商品
  //   if (meal.amount === 0) {
  //     newCart.items.splice(newCart.items.indexOf(meal), 1);
  //   }
  //   newCart.totalAmount -= 1;
  //   newCart.totalPrice -= meal.price;
  //   // setCartData(newCart);
  // }

  // Filtermeals
  function filterHAndle(keyword) {
    // 檢查item裡是不是有keyword 不等於-1就是有
    if (keyword.trim() === '') {
      // console.log('空');
      setMealsData(Meals_Data);
      setNoResults(false); // 重置狀態，有數據則不顯示"未找到"
    } else {
      const newMelsData = Meals_Data.filter(
        (item) => item.title.indexOf(keyword) !== -1
      );
      if (newMelsData.length === 0) {
        setNoResults(true); // 沒有數據則顯示"未找到"消息
        setMealsData([]);
      } else {
        setMealsData(newMelsData);
        setNoResults(false); // 有數據則不顯示"未找到"消息
      }
    }
  }

  // const clearCart = () => {
  //   const newCart = { ...cartData };
  //   // 將購物車商品的數量清0
  //   newCart.items.forEach((item) => delete item.amount);
  //   newCart.items = [];
  //   newCart.totalAmount = 0;
  //   newCart.totalPrice = 0;
  //   // setCartData(newCart);
  // };

  return (
    <CartContext.Provider value={{ ...cartData, cartDispatch }}>
      <div>
        <FilterMeals onFilter={filterHAndle} />
        {noResults ? (
          <p
            style={{
              color: '#f04d4d',
              fontSize: '20px',
              fontWeight: 'bold',
              paddingTop: '120px',
              textAlign: 'center',
            }}
          >
            未找到相關商品
            <br />
            請重新查詢🔎
          </p>
        ) : (
          <Meals mealsData={mealsData} hideDesc={true} />
        )}
        <Cart />;
      </div>
    </CartContext.Provider>
  );
}

export default App;
