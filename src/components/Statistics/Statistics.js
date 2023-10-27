
import { ListStats, LiItemStats, LabelStats, PercentageStats } from "./Statistics.styled";

export  const Statistics = ({stats}) => {
    return(
         
      <ListStats>
      {stats.map(item => {
        return (
          <LiItemStats key={item.id} backgroundColor={item.backgroundColor}>
             <LabelStats>{item.label}</LabelStats>
            <PercentageStats>{item.percentage}<b>%</b></PercentageStats>
          </LiItemStats>
        );
      })}
    </ListStats>
    )
    
  };


  