import Imagem1 from '../../assets/images/Imagem1.jpg';
import Imagem2 from '../../assets/images/Imagem2.jpg';
import Imagem3 from '../../assets/images/Imagem3.jpg';
import Imagem4 from '../../assets/images/Imagem4.jpg';

const tarefas = [
  {
    id: 1,
    title: 'Estudar React Native',
    description: 'Revisar componentes, props e estados para a aula da semana.',
    status: 'Pendente',
    photo: Imagem1,
  },
  {
    id: 2,
    title: 'Criar atividade prática',
    description: 'Montar um exercício com FlatList e componentes reutilizáveis.',
    status: 'Concluída',
    photo: Imagem2,
  },
  {
    id: 3,
    title: 'Atualizar material da turma',
    description: 'Adicionar exemplos com mock de dados e imagens online.',
    status: 'Pendente',
    photo: Imagem3,
  },
  {
    id: 4,
    title: 'Publicar projeto no Git',
    description: 'Subir a versão inicial do app com README de instruções.',
    status: 'Concluída',
    photo: Imagem4,
  },
];

export default tarefas;