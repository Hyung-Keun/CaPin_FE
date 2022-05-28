import type { GroupInfo } from "@type/group";

function generateUUID() {
  let d = new Date().getTime();
  let d2 =
    (typeof performance !== "undefined" &&
      performance.now &&
      performance.now() * 1000) ||
    0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

export default function getMockupCurrentGroups(count = 12): GroupInfo[] {
  const result = [];
  for (let i = 0; i < count; i++) {
    const groupId = i;
    const groupTitle = "영어 회화 원어민 도전";
    const imageUrl = generateUUID();
    const description = generateUUID() + generateUUID();
    const memberCount = Math.floor(Math.random() * 20);
    const maxMemberCount = memberCount + Math.floor(Math.random() * 10);
    const roughAddress = "선릉역/강남역/교대역";
    const firstDay = "2022.01.03";
    const lastDay = "2022.05.28";
    result.push({
      groupId,
      groupTitle,
      description,
      memberCount,
      maxMemberCount,
      roughAddress,
      firstDay,
      lastDay,
      imageUrl,
    });
  }

  return result;
}
