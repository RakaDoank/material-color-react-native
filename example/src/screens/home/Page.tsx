import {
	ScrollView,
	StyleSheet,
} from "react-native"

import {
	Appbar,
	Avatar,
	Button,
	Chip,
} from "react-native-paper"

import ImageIcon from "../../../assets/icon.png"

import {
	Actions,
} from "./_actions"

import {
	Section,
} from "./_section"

export function Page() {

	return (<>
		<Appbar.Header>
			<Appbar.Content
				title="Material Color"
			/>
		</Appbar.Header>

		<ScrollView
			contentInsetAdjustmentBehavior="automatic"
			contentContainerStyle={ [
				styleSheet.scrollContentContainer,
			] }
		>
			<Section
				title="Chips"
			>
				<Chip
					selected
				>
					Simple
				</Chip>
				<Chip
					selected
					showSelectedOverlay
				>
					With Selected Overlay
				</Chip>
				<Chip
					elevated
				>
					Elevated
				</Chip>
				<Chip
					compact
				>
					Compact Chip
				</Chip>
				<Chip
					icon="close"
				>
					Close Button
				</Chip>
				<Chip
					avatar={
						<Avatar.Image
							size={ 24 }
							source={ ImageIcon }
						/>
					}
				>
					Avatar
				</Chip>
				<Chip
					selected
					avatar={
						<Avatar.Image
							size={ 24 }
							source={ ImageIcon }
						/>
					}
				>
					Avatar (selected)
				</Chip>
				<Chip
					disabled
					icon="alien"
				>
					Icon (disabled)
				</Chip>
			</Section>

			<Section
				title="Outlined Chips"
			>

				<Chip
					mode="outlined"
					selected
				>
					Simple
				</Chip>
				<Chip
					mode="outlined"
					selected
					showSelectedOverlay
				>
					With Selected Overlay
				</Chip>
				<Chip
					mode="outlined"
					elevated
				>
					Elevated
				</Chip>
				<Chip
					mode="outlined"
					compact
				>
					Compact Chip
				</Chip>
				<Chip
					icon="close"
				>
					Close Button
				</Chip>
				<Chip
					mode="outlined"
					avatar={
						<Avatar.Image
							size={ 24 }
							source={ ImageIcon }
						/>
					}
				>
					Avatar
				</Chip>
				<Chip
					mode="outlined"
					selected
					avatar={
						<Avatar.Image
							size={ 24 }
							source={ ImageIcon }
						/>
					}
				>
					Avatar (selected)
				</Chip>
				<Chip
					mode="outlined"
					disabled
					icon="alien"
				>
					Icon (disabled)
				</Chip>
			</Section>

			<Section
				title="Contained Buttons"
			>
				<Button
					mode="contained"
				>
					Button
				</Button>
				<Button
					mode="contained"
					disabled
				>
					Disabled
				</Button>
				<Button
					mode="contained"
					icon="camera"
				>
					Icon
				</Button>
				<Button
					mode="contained"
					icon="alien"
					contentStyle={ styleSheet.flex_row_reverse }
				>
					Right
				</Button>
				<Button
					mode="contained"
					icon="database-lock"
					disabled
				>
					Icon Disabled
				</Button>
				<Button
					mode="contained"
					loading
				>
					Loading
				</Button>
			</Section>

			<Section
				title="Contained-tonal Buttons"
			>
				<Button
					mode="contained-tonal"
				>
					Button
				</Button>
				<Button
					mode="contained-tonal"
					disabled
				>
					Disabled
				</Button>
				<Button
					mode="contained-tonal"
					icon="camera"
				>
					Icon
				</Button>
				<Button
					mode="contained-tonal"
					icon="alien"
					contentStyle={ styleSheet.flex_row_reverse }
				>
					Right
				</Button>
				<Button
					mode="contained-tonal"
					icon="database-lock"
					disabled
				>
					Icon Disabled
				</Button>
				<Button
					mode="contained-tonal"
					loading
				>
					Loading
				</Button>
			</Section>
		</ScrollView>

		<Actions/>
	</>)

}

const
	styleSheet =
		StyleSheet.create({
			scrollContentContainer: {
				paddingBottom: 48,
			},
			flex_row_reverse: {
				flexDirection: "row-reverse",
			},
		})
