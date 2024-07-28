import { ICarrinho } from "../api/model/CartModel";
let itens: ICarrinho[] = [];

export const AddCart = (produto: ICarrinho) => {
 const itens: ICarrinho[] = JSON.parse(localStorage.getItem("carrinho") || "[]");
 const produtoExistenteIndex = itens.findIndex(item => item.id === produto.id);

 if (produtoExistenteIndex !== -1) {
   itens[produtoExistenteIndex].quantidade += produto.quantidade;
 } else {
   itens.push(produto);
 }

 localStorage.setItem("carrinho", JSON.stringify(itens));
};


export const GetCart = () => {
  itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
  return itens;
};


export const DeleteCart = (produtoID: number) => {
  let itens: ICarrinho[] = JSON.parse(localStorage.getItem("carrinho") || "[]");
  itens = itens.filter((item) => item.id !== produtoID);
  localStorage.setItem("carrinho", JSON.stringify(itens));
  return itens
};

export const LimparCart = () => {
  itens = [];
  localStorage.clear();
}