export type color =
  | "blue"
  | "orange"
  | "green"
  | "red"
  | "purple"
  | "pink"
  | "lime"
  | "sky"
  | "grey"

export const colors = [
  { title: "blue", color: "rgb(0, 121, 191)" },
  {
    title: "orange",
    color: "rgb(210, 144, 52)",
  },
  { title: "green", color: "rgb(81, 152, 57)" },
  { title: "red", color: "rgb(176, 70, 50)" },
  {
    title: "purple",
    color: "rgb(137, 96, 158)",
  },
  { title: "pink", color: "rgb(205, 90, 145)" },
  { title: "lime", color: "rgb(75, 191, 107)" },
  {
    title: "sky",
    color: "rgb(0, 174, 204)",
  },
  { title: "grey", color: "rgb(131, 140, 145)" },
]

export const randomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)]
}
