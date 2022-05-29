export const convertPixelToEm = (pixel: number) => `${pixel / 16}em`;

export function checkValidDate(date: string) {
  let result = true;
  try {
    if (isNaN(Date.parse(date))) throw new Error();
    const dateArr = date.split(".");
    var y = parseInt(dateArr[0], 10),
      m = parseInt(dateArr[1], 10),
      d = parseInt(dateArr[2], 10);

    const dateRegex =
      /^(?=\d)(?:(?:31(?!.(?:0?[2469]|11))|(?:30|29)(?!.0?2)|29(?=.0?2.(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(?:\x20|$))|(?:2[0-8]|1\d|0?[1-9]))([-.\/])(?:1[012]|0?[1-9])\1(?:1[6-9]|[2-9]\d)?\d\d(?:(?=\x20\d)\x20|$))?(((0?[1-9]|1[012])(:[0-5]\d){0,2}(\x20[AP]M))|([01]\d|2[0-3])(:[0-5]\d){1,2})?$/;
    result = dateRegex.test(d + "-" + m + "-" + y);
  } catch (err) {
    result = false;
  }
  return result;
}
