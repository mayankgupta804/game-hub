import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { 'value': '', 'label': 'Relevance' },
    { 'value': '-released', 'label': 'Release Date' },
    { 'value': '-metacritic', 'label': 'Popularity' },
    { 'value': '-added', 'label': 'Date Added' },
    { 'value': '-rating', 'label': 'Average Rating' },
    { 'value': 'name', 'label': 'Name' }
  ]

  const currentSortOrder = sortOrders.find(order => order.value === sortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>Order By: {currentSortOrder?.label || 'Relevance'}</MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            value={order.label}
            onClick={() => onSelectSortOrder(order.value)}>
            {currentSortOrder?.value === order.value ? currentSortOrder.label : order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default SortSelector;
