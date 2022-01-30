export type MenuItem = {
  id: number
  label: string
  path: string
  iconName: string
  sub: Array<MenuItem>
}
