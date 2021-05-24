import React from "react";
import { Grid } from "@material-ui/core";
import DataGrid, {
  Column,
  Scrolling, Summary, TotalItem,
  FilterRow,
  Button,
  Editing
} from 'devextreme-react/data-grid';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';

// components
import PageTitle from "../../components/PageTitle/PageTitle";

import { mediatypeService } from '../../domain/services';

const mainDataSource = new DataSource({
  store: new CustomStore({
      key: 'mediaTypeId',
      load: () => mediatypeService.all(),
      insert: (values) => mediatypeService.add(values),
      update: (key, values) => mediatypeService.update({...values, "id": key}),
      remove: (key) => mediatypeService.delete(key)
  })
});

export default function MediaTypes() {

  return (
    <>
      <PageTitle title="Media Types"/>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <DataGrid
            id="mediaTypeGrid"
            className={'dx-card wide-card'}
            dataSource={mainDataSource}
            repaintChangesOnly={true}
            width="100%"
            showBorders={false}
            focusedRowEnabled={true}
            defaultFocusedRowIndex={0}
            columnAutoWidth={true}
            columnHidingEnabled={true}
          >
            <Scrolling
              mode="virtual"
            />

            <FilterRow visible={true} />

            <Editing
              mode="form"
              useIcons={true}
              allowAdding={true}
              allowUpdating={true}
              allowDeleting={true} />

            <Column 
              type="buttons"
              caption={' '}
              dataField={'mediaTypeId'}
              width={100}
              hidingPriority={1}>
                <Button name="edit" />
                <Button name="delete" />
            </Column>
            <Column
              dataField={'name'}
              width={190}
              caption={'Name'}
              validationRules={[{type: "required"}]}
              hidingPriority={0}
            />
            <Summary>
              <TotalItem column="name" summaryType="count" />
            </Summary>
          </DataGrid>
        </Grid>
      </Grid>
    </>
  );
}