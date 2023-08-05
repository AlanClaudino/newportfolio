import {LoadingContainer, LoadingImg} from "./styled";
import loadingGif from "../../assets/loading.gif";

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingImg src={loadingGif} />
    </LoadingContainer>
  );
};

export default Loading;
