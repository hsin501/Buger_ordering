# Burger_ordering

這是一個基於 React 的響應式購物車系統，專為餐飲訂單設計。它提供了直觀的用戶界面，允許用戶瀏覽菜品、添加到購物車、調整數量，並完成結賬流程。

## 功能特點

1. 響應式設計，適配各種屏幕尺寸
2. 菜品列表展示，包含圖片、描述和價格
3. 實時更新的購物車
4. 數量調整功能
5. 購物車詳情頁面
6. 結賬流程

## 安裝指南

1. 克隆項目到本地

```bash
 git clone https://github.com/hsin501/Buger_ordering.git
```

2. 進入專案目錄並安裝依賴：

```bash
npm install
```

3. 啟動開發伺服器：

```bash
npm run dev
```

## 檔案結構

```
├── public/               # 公共資源 (靜態資源，如圖片等)
├── src/                  # 源代碼目錄
│   ├── assets/           # 靜態資源
│   ├── components/       # React 組件目錄
│   │   ├── Cart/         # 購物車相關組件
│   │   │   ├── CartDetails/  # 購物車詳情組件
│   │   │   │    ├── CartDetails.js # 購物車詳情邏輯
│   │   │   │    └── CartDetails.module.css # 購物車詳情樣式
│   │   │   ├── Checkout/     # 結帳相關組件
│   │   │   │    ├── Bar/ # 結帳組件
│   │   │   │    │   ├── Bar.js # 結帳邏輯
│   │   │   │    │   └── Bar.module.css # 結帳樣式
│   │   │   │    ├── CheckoutItem/ # 結帳餐點詳細項目組件
│   │   │   │    │   ├── CheckoutItem.js # 結帳餐點詳細項目邏輯
│   │   │   │    │   └── CheckoutItem.module.css # 結帳餐點詳細項目樣式
│   │   │   │    ├── Checkout.js # 組件
│   │   │   │    └── Checkout.module.css # 樣式
│   │   │   ├── Cart.js # 結帳主組件邏輯
│   │   │   └── Cart.module.css # 結帳主組件樣式
│   │   ├── FilterMeals/ # 菜品過濾組件
│   │   │   ├── FilterMeals.js # 過濾邏輯
│   │   │   └── FilterMeals.module.css # 過濾樣式
│   │   ├── Meals/ # 菜品相關組件
│   │   │   ├── Meal/ # 單個菜品組件
│   │   │   │   ├── Meal.js # 單個菜品邏輯
│   │   │   │   └── Meal.module.css # 單個菜品樣式
│   │   │   ├── Meals.js # 菜品列表邏輯
│   │   │   └── Meals.module.css # 菜品列表樣式
│   │   └── UI/ # 通用 UI 組件
│   │       ├── Backdrop/ # 背景遮罩組件
│   │       │    ├── Backdrop.js # 遮罩邏輯
│   │       │    └── Backdrop.module.css # 遮罩樣式
│   │       ├── Confirm/ # 確認對話框組件
│   │       │    ├── Confirm.js # 確認對話框邏輯
│   │       │    └── Confirm.module.css #  確認對話框樣式
│   │       └── Counter/ # 數量計數器組件
│   │            ├── Counter.js # 計數器邏輯
│   │            └── Counter.module.css # 計數器樣式
│   ├── store/            # 狀態管理
│   │   └── cartContext.js # 購物車上下文管理
│   ├── App.js            # 應用程式主組件
│   ├── index.css         # 全局樣式定義
│   └── index.js          # 應用程式入口點，渲染 React 組件
```

## 主要組件

- CartContext.js: 狀態管理
- Cart.js: 購物車
- CartDetails.js: 購物車詳情
- Checkout.js: 結賬
- CheckoutItem.js: 結賬項目
- FilterMeals.js: 過濾菜品
- Meals.js: 菜品列表
  每個組件都有相應的 CSS Module 文件，用於樣式管理，確保樣式的模塊化和可維護性。
  系統使用 Context API（cartContext.js）來管理購物車狀態，實現了組件間的數據共享和狀態管理。
  整個系統採用響應式設計，使用 vh 單位和 media queries 來確保在不同設備上的良好顯示效果。

## 使用技術

- React
- JavaScript
- CSS
- HTML
- Context API
- CSS Module
- media queries (有 RWD)
