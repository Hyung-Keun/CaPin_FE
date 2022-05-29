/**
 *
 * @param queryOption falsy값을 property로 가질 수 있는 object.
 * @description queryParameter에 nullable한 값을 넣는 것은 깔끔하지 않기 떄문에 해당 부분을 거르고, valid한 queryString을 생성합니다.
 *              queryOption은 Nested되지 않아야 합니다.
 *              숫자 0은 falsy하다고 취급하지 않습니다.
 *              자료구조 Map, Set을 취급하지 않았습니다.
 */

export function getValidQueryParameter<T extends { [key: string]: unknown }>(
  queryOption: T,
): string {
  let result = "?";

  const config: { [key: string]: string | string[] } = Object.entries(
    queryOption,
  ).reduce((acc, [key, value]) => {
    if (
      typeof value === "object" &&
      Object.getPrototypeOf(value).isPrototypeOf(Object)
    ) {
      throw new Error("객체를 프로퍼티로 가져선 안됩니다.");
    }

    if (!Boolean(value) && typeof value !== "number") {
      return acc;
    }

    if (Array.isArray(value)) {
      const filteredValue = value
        .filter(
          (element) =>
            typeof element !== "object" && (Boolean(element) || element === 0),
        )
        .map(String);
      return { ...acc, [String(key)]: filteredValue };
    }

    return { ...acc, [String(key)]: String(value) };
  }, {});

  const firstLetter = {
    current: result.length === 1 ? "" : "&",
  };

  for (const [key, value] of Object.entries(config)) {
    if (Array.isArray(value)) {
      for (const elem of value) {
        result += `${firstLetter.current}${key}=${elem}`;
        firstLetter.current = "&";
      }

      continue;
    }

    result += `${firstLetter.current}${key}=${value}`;
    firstLetter.current = "&";
  }

  return result;
}
