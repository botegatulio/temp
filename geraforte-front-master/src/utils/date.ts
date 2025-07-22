export const getTranslateKeyMonthAlias = (monthNumber: number) => {
  const translateKey = [
    'month_alias.january',
    'month_alias.february',
    'month_alias.march',
    'month_alias.april',
    'month_alias.may',
    'month_alias.june',
    'month_alias.july',
    'month_alias.august',
    'month_alias.september',
    'month_alias.october',
    'month_alias.november',
    'month_alias.december'
  ]

  return translateKey[monthNumber]
}
