import React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';


const StyledCard = ({...props}) => {
    const LeftContent = () => <Avatar.Icon {...props} icon={props.icon} />

    return(  
        <Card>
            <Card.Title title="Canasta #1" subtitle="Card Subtitle" left={LeftContent} />
            <Card.Content>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
            </Card.Actions>
      </Card>)

    };

export default StyledCard;