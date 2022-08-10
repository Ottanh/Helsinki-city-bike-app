interface Props {
  page: number;
  setPage: (page: number) => void
}

const PageControls = ({ page, setPage }: Props) => {
  const previous = () => {
    if(page > 0) {
      setPage(page - 1);
    }
  }

  const next = () => {
    setPage(page + 1);
  }

  return (
    <div className="Page-controls">
    <button onClick={previous}>prev</button>
    <span className="Page-count">{page}</span>
    <button onClick={next}>next</button>
  </div>
  )
}

export default PageControls;