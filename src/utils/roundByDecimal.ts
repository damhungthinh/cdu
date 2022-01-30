export const roundByDecimal = (val: number, digit: number) => {
  const decimal = 10 ** digit

  return Math.round((val + Number.EPSILON) * decimal) / decimal
}
