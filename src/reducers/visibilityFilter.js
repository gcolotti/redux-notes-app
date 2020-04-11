
import { FILTER_VISIBILITY } from '../actions/actions';

function visibilityFilter(filter = 'all', action) {
  switch (action.type) {
    case FILTER_VISIBILITY:
      filter = action.filter;
      return filter;

    default:
      return filter;
  };
}

export default visibilityFilter;