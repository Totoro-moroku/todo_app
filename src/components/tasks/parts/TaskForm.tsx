import FormButton from '@/components/ui/atoms/FormButton'
import FormInput from '@/components/ui/atoms/FormInput'
import FormTextarea from '@/components/ui/atoms/FormTextare'
import Form from '@/components/ui/elements/Form'
import useTask from '@/hooks/useTask'
import { FormEvent } from 'react'

function TaskForm() {
  const { task, insertTask, setTaskValue } = useTask()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await insertTask().then((_) => {})
  }

  return (
    <>
      <div>
        <div>{task?.update_at}</div>
        <Form className={'flex flex-row'} onSubmit={handleSubmit}>
          <div className="fle-auto w-full">
            <div className="my-4 space-y-1 sm:mx-4">
              <FormInput
                type="text"
                id="title"
                placeholder="タスク名"
                required
                value={task?.title}
                setValue={(e: any) => {
                  setTaskValue(e, 'title')
                }}
              />
            </div>
            <div className="my-4 space-y-1 sm:mx-4">
              <FormTextarea
                id="content"
                placeholder="......"
                rows={4}
                value={task?.content}
              />
            </div>
            <hr />
            <FormButton type="submit" className="text-white">
              保存
            </FormButton>
          </div>
        </Form>
      </div>
    </>
  )
}

export default TaskForm
