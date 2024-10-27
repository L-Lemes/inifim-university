interface IRowProps {
  title: string
  value: string
}

export const Row = ({title, value}: IRowProps) => {
  return (
    <div className="flex justify-between items-center w-screen -ml-6 px-10 py-2.5">
    <p>{title}</p>
    <p>{value}</p>
  </div>
  )
}