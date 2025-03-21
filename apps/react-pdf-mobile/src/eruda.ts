import eruda from 'eruda';
 
// Função para inicializar o Eruda apenas em desenvolvimento ou com parâmetro específico
export const initEruda = () => {
  eruda.init();
  console.log('Eruda inicializado para depuração mobile');
};
