import React from "react";
import { Flex, FlexProps, Heading, Text } from "rebass";
import { Tiles } from "@rebass/layout";
import firebase from 'firebase/app';
import { MButton, Input, Select, ProgressButton } from "src/atoms";
import { trackPromise } from "react-promise-tracker";

export const UI: React.FC<{}> = () => {
    return (
        <Flex maxWidth='1170px' flexDirection='column' m='10px'>
            <Heading variant='heading1'>
                Heading 1
            </Heading>
            <Heading variant='heading2'>
                Heading 2
            </Heading>
            <Heading variant='heading3'>
                Heading 3
            </Heading>
            <Text variant='body' mt={2}>
                This is what <b>body</b> looks like.
            </Text>
            <Text variant='caption'>
                This is what <b>caption</b> looks like.
            </Text>
            <Tiles columns={[1, 2, 2, 4]}>
                <Buttons mt={3} />
                <Form mt={2} />
            </Tiles>
            <ProgressButton mt={4} scope='sign-out' onClick={() => {
                trackPromise(
                    firebase.app().auth().signOut(),
                    'sign-out'
                )
            }}>
                Log out
            </ProgressButton>
        </Flex>
    );
};

const Form: React.FC<FlexProps> = (props) => (
    <Flex {...props} flexDirection='column'>
        {/* <Input name='name' label='Name' mb={2} />
        <Select defaultValue='Artificer' label='Class'>
            <option>Artificer</option>
            <option>Barbarian</option>
            <option>Bard</option>
            <option>Cleric</option>
            <option>Druid</option>
            <option>Monk</option>
            <option>Paladin</option>
            <option>Ranger</option>
            <option>Rogue</option>
            <option>Sorcerer</option>
            <option>Warlock</option>
            <option>Wizard</option>
        </Select> */}
    </Flex>
)

const Buttons: React.FC<FlexProps> = (props) => (
    <Flex {...props} flexDirection='column'>
        <Heading variant='heading3' mb={1}>
            Buttons
        </Heading>
        <MButton>
            Press me!
        </MButton>
        <MButton variant='secondary' mt={2}>
            Press me!
        </MButton>
        <MButton variant='hollow' mt={2}>
            Press me!
        </MButton>
        <MButton variant='secondary-hollow' mt={2}>
            Press me!
        </MButton>
    </Flex>
)
