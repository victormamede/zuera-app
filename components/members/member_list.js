import Member from './member'

const colorOptions = ['primary', 'info', 'success', 'danger', 'warning']

export default function MemberList({ members }) {
  return (
    <div className='content'>
      {Object.entries(members).map(([id, member], index) => (
        <Member
          data={member}
          key={index}
          color={colorOptions[index % colorOptions.length]}
        />
      ))}
    </div>
  )
}
