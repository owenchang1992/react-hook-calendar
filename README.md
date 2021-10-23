# How to install?
```bash
yarn install
```

# How to start?
```bash
yarn start:dev
```

# How to build?
```bash
yarn build
```

# How to select date?
there's two ways for select date
1. Edit input field and press "Enter" to confirm
2. Select date in Calendar


# API Properties of Components

## CalendarHeader
Name | Type | Default | Description
-----| ---- | ---- | -----
title| string | '' | title for a view
onTitleClick | function |  | called when Title is clicked
onBackClick | function |  | called when back arrow is clicked
onForwardClick | function |  | called when forward arrow is clicked

## CalendarDays

Name | Type | Default | Description
-----| ---- | ---- | -----
days| array of DAY | [DAYs] | please see note for more detail
onDateSelected | function(DAY) | null | called when date is clicked

> Note:
> Tag Type => PREVIOUS_MONTH, NEXT_MONTH, CURRENT_MONTH, SELECTEDDAY, TODAY
> DAY Object => { title: DAY_TITLE, tags: [TAGS_OF_DAY] }

## CalendarMonths
Name | Type | Default | Description
-----| ---- | ---- | -----
month| number | current month | selected month( from 0 to 11 )
onMonthSelected| function(number) | | called when month is clicked

## CalendarYears
Name | Type | Default | Description
-----| ---- | ---- | -----
year| number | current year | selected year
decadeCounter | number | 0 | for counting decade of year view
onYearSelected | function | | called when year is clicked

## DatePicker
Name | Type | Default | Description
-----| ---- | ---- | -----
selectedDay | date | current date | selected date
onDateComfirm | function | | called when date input comfirmed
onInputClick | function | | open calendar when input field click
