import React from "react";
import { Grid } from "@material-ui/core";
import DataGrid, {
  Column,
  Scrolling, Summary, TotalItem,
  FilterRow,
  Button,
  Editing,
  Lookup,
} from 'devextreme-react/data-grid';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';

// components
import PageTitle from "../../components/PageTitle/PageTitle";

import { albumService } from '../../domain/services';
import { artistService } from '../../domain/services';
import { Lookup as LookupArtist, Artist } from '../../domain/types';

const mainDataSource = new DataSource({
  store: new CustomStore({
      key: 'albumId',
      load: () => albumService.all(),
      insert: (values) => albumService.add(values),
      update: (key, values) => albumService.update({...values, "id": key}),
      remove: (key) => albumService.delete(key)
  })
});

const artistDataSource = {
  store: {
      type: 'array',
      data: [],
      key: 'artistId'
  },
  pageSize: 10,
  paginate: true   
}

export default function Albums() {
  const [lookupArtists, setLookupArtists] = React.useState<LookupArtist<Artist>>(artistDataSource);

  React.useEffect(() => {
    let isSubscribed: boolean = true;

    (async function() {
      const artists = await artistService.all();
      const lookup = {
        ...lookupArtists, 
        store: {
          ...lookupArtists.store,
          data: artists
        }
      }
      if (isSubscribed) {
        setLookupArtists(lookup);
      }
    })();

    return () => {
      isSubscribed = false
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PageTitle title="Albums"/>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <DataGrid
            id="albumsGrid"
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
              dataField={'albumId'}
              width={100}
              hidingPriority={1}>
                <Button name="edit" />
                <Button name="delete" />
            </Column>
            <Column
              dataField={'title'}
              width={190}
              caption={'Title'}
              validationRules={[{type: "required"}]}
              hidingPriority={0}
            />
            <Column
              dataField={'artistId'}
              width={190}
              caption={'Artist'}
              validationRules={[{type: "required"}]}
              hidingPriority={2}
            >
              <Lookup dataSource={lookupArtists} valueExpr="artistId" displayExpr="name" />
            </Column>
            <Summary>
              <TotalItem column="title" summaryType="count" />
            </Summary>
          </DataGrid>
        </Grid>
      </Grid>
    </>
  );
}