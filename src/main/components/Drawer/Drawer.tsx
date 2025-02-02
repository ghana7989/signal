import {
  Divider,
  Drawer as MaterialDrawer,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from "@material-ui/core"
import { Help } from "@material-ui/icons"
import { observer } from "mobx-react-lite"
import { FC, useCallback } from "react"
import styled from "styled-components"
import { localized } from "../../../common/localize/localizedString"
import { useStores } from "../../hooks/useStores"
import Logo from "../../images/logo-white.svg"
import { SongList } from "./SongList"
import { TrackList } from "./TrackList/TrackList"

const BannerContainer = styled.div`
  background: var(--theme-color);
  padding: 0 16px;
  height: 3rem;
  display: flex;
  align-items: center;
  flex-shrink: 0;

  a {
    display: flex;
  }
`

const LogoIcon = styled(Logo)`
  height: 1.4rem;
`

const Banner: FC = () => {
  return (
    <BannerContainer>
      <a href="/">
        <LogoIcon viewBox="0 0 449 120" width={undefined} height={undefined} />
      </a>
    </BannerContainer>
  )
}

const HelpIcon = styled(Help)`
  min-width: auto;
  margin-right: 0.6em;
`

export const Drawer: FC = observer(() => {
  const { rootViewStore, router } = useStores()
  const open = rootViewStore.openDrawer
  const close = () => (rootViewStore.openDrawer = false)

  return (
    <MaterialDrawer open={open} onClose={close}>
      <Banner />
      <SongList />
      <Divider />
      <TrackList />
      <Divider />
      <List>
        <ListItem
          button
          onClick={useCallback(() => {
            close()
            router.path = "/tempo"
          }, [])}
        >
          <ListItemText primary={localized("tempo-track", "Tempo Track")} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem
          button
          onClick={useCallback(() => {
            close()
            router.pushArrange()
          }, [])}
        >
          <ListItemText
            primary={localized("arrangement-view", "Arrangement View")}
          />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem
          button
          onClick={useCallback(() => {
            rootViewStore.openDeviceDialog = true
          }, [])}
        >
          <ListItemText primary={localized("midi-settings", "MIDI Settings")} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem
          button
          onClick={useCallback(() => (rootViewStore.openHelp = true), [])}
        >
          <HelpIcon />
          <ListItemText primary={localized("help", "Help")} />
        </ListItem>
      </List>
    </MaterialDrawer>
  )
})

export const ListHeader = styled(ListSubheader)`
  &.MuiListSubheader-root {
    background: var(--background-color);
  }
`
