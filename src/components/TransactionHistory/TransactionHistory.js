import { TableTransaction, TheadTable, LineTable, TrBody, CellTable } from './TransactionHistory.styled'
 export const TransactionHistory = ({ items }) => {
        return (
   <TableTransaction>
  <TheadTable>
    <tr>
      <LineTable>Type</LineTable>
      <LineTable>Amount</LineTable>
      <LineTable>Currency</LineTable>
    </tr>
  </TheadTable>
  <tbody>
  {items.map(item => (
          <TrBody key={item.id}>
      <CellTable>{item.type}</CellTable>
      <CellTable>{item.amount}</CellTable>
      <CellTable>{item.currency}</CellTable>
    </TrBody>
     ))}
  </tbody>
</TableTransaction>
    )
  };
                