export type LineSegment = {
    text: string,
    type: 'bracket' | 'brace' | 'key' | 'value'
}
export type Line = {
    indent: number,
    segments: LineSegment[],
}
export type LineOptions = { indent?: number, ignoreOpeningBracket: boolean }