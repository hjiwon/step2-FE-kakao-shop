import Button from "../atoms/Button";
import { useState } from "react";
import SelectedOption from "../molecules/SelectedOption";
import Container from "../atoms/Container";
import DeliveryInformation from "../molecules/DeliveryInformation";
import OptionsList from "../molecules/OptionsList";

const ProductOptions = ({ product }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [sumOptionPrice, setSumOptionPrice] = useState(0);
  const [sumOptionCount, setSumOptionCount] = useState(0);

  const options = product.options;

  return (
    <div className="flex flex-col items-center sticky top-0 h-200 pb-96">

      <OptionsList 
        options={options} 
        selectedOptions={selectedOptions}
        setSumOptionCount={setSumOptionCount} 
        setSumOptionPrice={setSumOptionPrice}
        setSelectedOptions={setSelectedOptions}
      />

      <DeliveryInformation />

      <div className="w-full border-t mt-4 mb-3"/>

      <Container className="w-full"> 
        <ul>
          {selectedOptions.map((selectedOption, index) =>
            <SelectedOption 
              key={index}
              selectedOption={selectedOption} 
              setSumOptionCount={setSumOptionCount} 
              setSumOptionPrice={setSumOptionPrice} 
              className="border border-b-0 1px first:rounded-t-lg last:rounded-b-lg last:border-b w-full"
            />
          )}
        </ul>
      </Container>

      <Container className="flex justify-between w-full">
        <div>총 수량 : {sumOptionCount}개</div>
        <div>총 주문금액 : {sumOptionPrice}원</div>
      </Container>

      <Container className="flex w-full mt-3">
        <Button className="w-2/5 p-2 mr-1 text-sm h-10 bg-gray-900 rounded-md text-white">장바구니 담기</Button>
        <Button className="w-3/5 p-2 text-sm h-10 bg-yellow-300 rounded-md">톡딜가로 구매하기</Button>
      </Container>
    </div>
  )
}

export default ProductOptions;