export const filterChapters = (arr, chap = null) =>
    arr.filter((el) => el.chapter_number == chap)
export const filterVerses = (arr, chap = null, verse = null) => {
    if (verse) {
        return arr.filter(
            (el) => el.chapter_number == chap && el.verse_number == verse
        )
    } else {
        return arr.filter((el) => el.chapter_number == chap)
    }
}
