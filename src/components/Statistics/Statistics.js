
import { ListStats, LiItemStats, LabelStats, PercentageStats , TitleStats, ContainerStates} from "./Statistics.styled";

export  const Statistics = ({title, stats}) => {
    return(
      <ContainerStates>
{title && <TitleStats>{title}</TitleStats>}
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
    </ContainerStates>
    )
    
  };

