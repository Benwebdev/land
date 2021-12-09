export const IsChrome = navigator.userAgent.indexOf('Chrome') > -1;
export const IsIE = navigator.userAgent.indexOf('MSIE') > -1;
export const IsFirefox = navigator.userAgent.indexOf('Firefox') > -1;
export const IsSafari =
  IsChrome && navigator.userAgent.indexOf('Safari') > -1
    ? false
    : navigator.userAgent.indexOf('Safari') > -1;
export const IsCamino = navigator.userAgent.indexOf('Camino') > -1;
export const IsOpera =
  IsChrome && navigator.userAgent.toLowerCase().indexOf('op') > -1
    ? false
    : navigator.userAgent.toLowerCase().indexOf('op') > -1;

export const IsMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
);
export const IsIOS = /iPad|iPhone|iPod/i.test(navigator.userAgent);
export const IdAndroid = /Android/i.test(navigator.userAgent);
