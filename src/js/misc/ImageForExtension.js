
// Returns link to image for given extension
export default function imageForExtension(extension) {
  const ext = extension.toLowerCase();
  const icons = {
    'pdf': 'https://image.flaticon.com/icons/svg/337/337946.svg',
    'doc': 'https://image.flaticon.com/icons/svg/337/337932.svg',
    'docx': 'https://image.flaticon.com/icons/svg/337/337932.svg',
    'xls': 'https://image.flaticon.com/icons/svg/337/337958.svg',
    'xlsx': 'https://image.flaticon.com/icons/svg/337/337958.svg',
    'ppt': 'https://image.flaticon.com/icons/svg/337/337949.svg',
    'pptx': 'https://image.flaticon.com/icons/svg/337/337949.svg',
    'jpg': 'https://image.flaticon.com/icons/svg/337/337940.svg',
    'jpeg': 'https://image.flaticon.com/icons/svg/337/337940.svg',
    'png': 'https://image.flaticon.com/icons/svg/337/337948.svg',
    'svg': 'https://image.flaticon.com/icons/svg/337/337954.svg',
    'gif': 'https://image.flaticon.com/icons/svg/337/337936.svg',
    'cad': 'https://image.flaticon.com/icons/svg/337/337926.svg',
    'eps': 'https://image.flaticon.com/icons/svg/337/337933.svg',
    'bmp': 'https://image.flaticon.com/icons/svg/337/337925.svg',
    'zip': 'https://image.flaticon.com/icons/svg/337/337960.svg',
    'html': 'https://image.flaticon.com/icons/svg/337/337937.svg',
    'xml': 'https://image.flaticon.com/icons/svg/337/337959.svg',
    'css': 'https://image.flaticon.com/icons/svg/337/337928.svg',
    'txt': 'https://image.flaticon.com/icons/svg/337/337956.svg',
    'sql': 'https://image.flaticon.com/icons/svg/337/337953.svg',
    'php': 'https://image.flaticon.com/icons/svg/337/337947.svg',
    'js': 'https://image.flaticon.com/icons/svg/337/337941.svg',
    'jsx': 'https://image.flaticon.com/icons/svg/337/337941.svg',
    'mp3': 'https://image.flaticon.com/icons/svg/337/337944.svg',
    'psd': 'https://image.flaticon.com/icons/svg/337/337951.svg',
    'ai': 'https://image.flaticon.com/icons/svg/337/337923.svg',
    'tif': 'https://image.flaticon.com/icons/svg/337/337955.svg',
    'tiff': 'https://image.flaticon.com/icons/svg/337/337955.svg',
    'avi': 'https://image.flaticon.com/icons/svg/337/337924.svg',
    'mov': 'https://image.flaticon.com/icons/svg/337/337943.svg',
    'cdr': 'https://image.flaticon.com/icons/svg/337/337927.svg',
    'raw': 'https://image.flaticon.com/icons/svg/337/337952.svg',
    'iso': 'https://image.flaticon.com/icons/svg/337/337939.svg',
    'mpg': 'https://image.flaticon.com/icons/svg/337/337945.svg',
    'wmv': 'https://image.flaticon.com/icons/svg/337/337957.svg',
    'flv': 'https://image.flaticon.com/icons/svg/337/337935.svg',
    'dll': 'https://image.flaticon.com/icons/svg/337/337930.svg',
    'midi': 'https://image.flaticon.com/icons/svg/337/337942.svg',
    'dat': 'https://image.flaticon.com/icons/svg/337/337929.svg',
    'indd': 'https://image.flaticon.com/icons/svg/337/337938.svg',
    'aac': 'https://image.flaticon.com/icons/svg/337/337922.svg',
    'dmg': 'https://image.flaticon.com/icons/svg/337/337931.svg',
    '3ds': 'https://image.flaticon.com/icons/svg/337/337921.svg',
    'fla': 'https://image.flaticon.com/icons/svg/337/337934.svg'
  };

  // Case for default img
  if (['png', 'jpg', 'jpeg', 'svg'].includes(ext)) {
    // return null;
  }

  // Returns link for image extension
  if (icons[ext]) {
    return icons[ext];
  }

  // If no icon for extension - return default icon
  return 'https://image.flaticon.com/icons/svg/136/136509.svg';
}