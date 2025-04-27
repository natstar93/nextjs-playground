export default function Component({ name, value }: Record<string, string>) {
  return (
    <tr className='border'>
      <td className='p-2 border-r'>{name}</td>
      <td className='p-2'>{value}</td>
    </tr>
  );
}