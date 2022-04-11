import DataWithLoader from '@erxes/ui/src/components/DataWithLoader';
import HeaderDescription from '@erxes/ui/src/components/HeaderDescription';
import { IRouterProps } from '@erxes/ui/src/types';
import React from 'react';
import { __ } from 'coreui/utils';
import Wrapper from '@erxes/ui/src/layout/components/Wrapper';
import ClientPortalDetailContainer from '../containers/ClientPortalDetail';
import List from '../containers/List';

type Props = {
  queryParams: any;
  loading?: boolean;
} & IRouterProps;

class ClientPortal extends React.Component<Props, {}> {
  render() {
    const { loading = false, queryParams, history } = this.props;

    const breadcrumb = [
      { title: __('Settings'), link: '/settings' },
      { title: __('Client Portal'), link: '/settings/client-portal' }
    ];

    const count = queryParams._id ? 1 : 0;

    return (
      <Wrapper
        header={
          <Wrapper.Header title="Client portal" breadcrumb={breadcrumb} />
        }
        subHeader={
          <HeaderDescription
            icon="/images/actions/32.svg"
            title="Client Portal"
            description={__(
              'Add unlimited Client Portals with unlimited support to further your growth and accelerate your business'
            )}
          />
        }
        leftSidebar={<List {...this.props} />}
        content={
          <DataWithLoader
            data={
              <ClientPortalDetailContainer
                queryParams={queryParams}
                history={history}
              />
            }
            count={count}
            loading={loading}
            emptyText="Getting Started with Client Portal"
            emptyImage="/images/actions/13.svg"
          />
        }
        hasBorder={true}
        transparent={true}
      />
    );
  }
}

export default ClientPortal;
