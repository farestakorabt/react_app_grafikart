import { useState } from "react";
import "../../../App.css";
import { Checkbox } from "../forms/Checkbox";
import { ProductCategoryRow } from "../products/ProductCategoryRow";
import { ProductRow } from "../products/ProductRow";
import { ErrorBoundary } from "react-error-boundary";

const PRODUCTS = [
  { category: "Fruits", price: "1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "10", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "6", stocked: true, name: "Peas" },
];

function ProductsAppli() {
  const [showStockedOnly, setShowStockedOnly] = useState(false);
  const [search, setSearch] = useState("");
  const [range, setRange] = useState(0);

  const visibleProducts = PRODUCTS.filter((product) => {
    if (showStockedOnly && !product.stocked) {
      return false;
    }
    if (search && !product.name.includes(search)) {
      return false;
    }
    if (range && product.price !== range) {
      return false;
    }
    return true;
  });

  return (
    <>
      <Searchbar
        search={search}
        onSearchChange={setSearch}
        range={range}
        onRangeChange={setRange}
        showStockedOnly={showStockedOnly}
        setShowStockedOnlyChange={setShowStockedOnly}
      />
      <ErrorBoundary
        FallBackComponent={AlertError}
        onReset={() => console.log("rest")}
      >
        <ProductTable products={visibleProducts} />
      </ErrorBoundary>
    </>
  );
}

function AlertError({ error, resetErrorBoundary }) {
  return (
    <div style={{ color: "red" }}>
      {error.toString()}
      <button onClick={resetErrorBoundary}>Reset</button>
    </div>
  );
}

function Searchbar({
  search,
  onSearchChange,
  range,
  onRangeChange,
  showStockedOnly,
  setShowStockedOnlyChange,
}) {
  return (
    <>
      <div>
        <input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          // onChange={onSearchChange}
          placeholder="Rechercher..."
        />

        <input
          type="range"
          value={range}
          min={1}
          max={10}
          onChange={(e) => onRangeChange(e.target.value)}
        />

        <Checkbox
          id="stocked"
          checked={showStockedOnly}
          onChange={setShowStockedOnlyChange}
          label="Afficher seulement les produits en stock"
        />
      </div>
    </>
  );
}

function ProductTable({ products }) {
  const rows = [];

  let lastCategory = null;

  for (let product of products) {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow key={product.category} name={product.category} />
      );
    }
    lastCategory = product.category;
    rows.push(<ProductRow product={product} key={product.name} />);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductsAppli;
