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

export const UpdateCart = (produto: ICarrinho) => {
  try {
      // Obter itens do localStorage ou inicializar um array vazio
      const itens: ICarrinho[] = JSON.parse(localStorage.getItem("carrinho") || "[]");

      // Encontrar o índice do produto no array
      const produtoExistenteIndex = itens.findIndex(item => item.id === produto.id);

      if (produtoExistenteIndex !== -1) {
          // Se o produto já existe, atualizar a quantidade
          const novoQuantidade = itens[produtoExistenteIndex].quantidade + produto.quantidade;

          // Garantir que a quantidade não seja negativa
          itens[produtoExistenteIndex].quantidade = Math.max(novoQuantidade, 0);
      } else {
          // Se o produto não existe, adicioná-lo ao array
          itens.push(produto);
      }

      // Salvar o array atualizado no localStorage
      localStorage.setItem("carrinho", JSON.stringify(itens));
  } catch (error) {
      console.error("Erro ao atualizar o carrinho:", error);
  }
};