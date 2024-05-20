// import {apiGetSingleImage} from '@api/wrapping';
import {useState, useEffect} from 'react';
import {RenderImageProps} from '.';
import { Functional } from '@utils/helpers';

const useRenderImage = (props?: RenderImageProps) => {
  const {
    imageUrl,
    style,
    width,
    height,
    onPress,
    svgStyle,
    imageStyle,
    containerStyle,
    placeholder,
    resizeMode,
    source,
    showPreviewImage = false,
    showLoadingIndicator = true,
  } = props || {};
  const [isError, setisError] = useState<boolean>(false);
  const [currentImageUrl, setCurrentImageUrl] = useState<string>(
    imageUrl || '',
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const placeHolderStyle = placeholder?.props?.style;
  const isSVG = currentImageUrl?.endsWith('.svg');

  useEffect(() => {
    setCurrentImageUrl(imageUrl || '');
  }, [imageUrl]);


  const openPreview = () => {
    if (!showPreviewImage) {
      return;
    }
    setIsModalOpen(true);
  };

  const onModalClose = () => setIsModalOpen(false);

  const onLoadEnd = () => {
    return setIsLoading(false);
  };

  const onError = () => {
    onLoadEnd();
    return setisError(true);
  };

  const onLoadStart = () => {
    return setIsLoading(true);
  };

  return {
    source,
    style,
    imageStyle,
    svgStyle,
    width,
    height,
    placeholder,
    placeHolderStyle,
    containerStyle,
    showLoadingIndicator,
    currentImageUrl,
    resizeMode,
    isSVG,
    isLoading,
    isError,
    isModalOpen,
    onPress,
    onLoadStart,
    onLoadEnd,
    onError,
    openPreview,
    onModalClose,
  };
};

export {useRenderImage};
