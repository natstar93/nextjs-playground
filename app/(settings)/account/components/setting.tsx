export default function Component({ name, value }: Record<string, string>) {
    return (
        <tr className='flex flex-row'>
          <td className='p-2 border'>{name}</td>
          <tr className='p-2 border'>{value}</tr>
        </tr>
    );
  }