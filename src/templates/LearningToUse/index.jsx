import { InstructionsLearning, TextLearning, TitleLearning } from './style';

export const LearningToUse = () => {
  return (
    <div>
      <TitleLearning>Modo de uso</TitleLearning>

      <InstructionsLearning>
        <TitleLearning>Sorteio de números</TitleLearning>
        <TextLearning>
          Para realizar um sorteio com números, basta apenas escolher a quantidade de números a serem sorteados, e após
          determinar o intervalo entre os números (Ex: 1 a 10)
        </TextLearning>

        <div style={{ margin: '30px 0px' }}></div>

        <TitleLearning>Sorteio de palavras</TitleLearning>
        <TextLearning>
          Para realizar este tipo de sorteio, basta escolher a quantidade de palavras a serem sorteadas, e digita-las no
          campo de texto. (Obs: Não se esqueça de separar cada palavra com uma quebra de linha)
        </TextLearning>
      </InstructionsLearning>
    </div>
  );
};
