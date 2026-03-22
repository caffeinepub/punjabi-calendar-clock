# Punjabi Calendar Clock

## Current State
New project with no existing application logic.

## Requested Changes (Diff)

### Add
- Live digital clock showing current time (HH:MM:SS)
- Current date display in English and Punjabi
- Punjabi month names (Nanakshahi calendar / traditional Punjabi months)
- Calendar widget showing current month with Punjabi month name
- Punjabi day names
- Today's date highlighted in the calendar

### Modify
N/A

### Remove
N/A

## Implementation Plan
- Backend: simple actor to store/return Punjabi month and day name data
- Frontend:
  - Live clock using setInterval (updates every second)
  - Map current Gregorian month to Punjabi month name
  - Display date in Punjabi script + transliteration
  - Mini monthly calendar grid
  - Warm heritage design (cream/navy palette, Punjabi typography)
