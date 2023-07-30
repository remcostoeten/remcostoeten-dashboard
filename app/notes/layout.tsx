interface NotesProps {
    children?: React.ReactNode
  }
  
  export default function Notes({ children }: NotesProps) {
    return (
      <div className="container mx-auto grid items-start gap-10 py-8">
        {children}
      </div>
    )
  }
  