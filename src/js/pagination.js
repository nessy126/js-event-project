export default function paginationMarkup(
  totalPage,
  nowPage,
  {
    countItemShow = 4,

    showStart = false,
    contentStart = '',

    showEnd = false,
    contentEnd = '',

    dotTag = 'span',
    baseTag = 'b',
    link = '',
    baseClass = 'pag-links',
    classActive = 'active-page',

    query = '',
  } = {},
) {
  const genElement = (page = 1, text = page) =>
    link && baseTag === 'a'
      ? `<${baseTag} class="${
          page === nowPage ? (baseClass ? classActive : `${baseClass} ${classActive}`) : baseClass
        }" href="${link + page}${query ? '&' + query : ''}">${text}</${baseTag}>`
      : `<${baseTag} class="${
          page === nowPage ? (baseClass ? classActive : `${baseClass} ${classActive}`) : baseClass
        }">${text}</${baseTag}>`;

  let markup = showStart ? genElement(1, contentStart) : '';

  const startShow = nowPage - countItemShow;
  const endShow = nowPage + countItemShow;
  if (totalPage >= 50) {
    totalPage = 50;
  }
  for (let i = 1; i <= totalPage; i++) {
    if (i > endShow) i = totalPage;

    if (startShow === i && i > 1) markup += `<${dotTag}>...</${dotTag}>`;

    if (i === 1 || i === totalPage || (i >= nowPage - 2 && i <= nowPage + 4))
      markup += genElement(i);

    if (endShow === i) markup += `<${dotTag}>...</${dotTag}>`;

    if (i < startShow) i = startShow - 1;
  }

  return (markup += showEnd ? genElement(totalPage, contentEnd) : '');
}
