# Module: MMM-Valentine
Initial idea by [tamug1](https://forum.magicmirror.builders/topic/1630/replacing-snow-flakes-with-hearts-in-the-mmm-snow-module).

Most of the code shamelessly borrowed from [MMM-Snow module by @MichMich](https://github.com/MichMich/MMM-Snow) which was inspired by [NHubbard's Snow Plugin](https://github.com/nhubbard/MagicPlugins/tree/master/snow)

Icons designed by [Freepik from Flaticon](http://www.flaticon.com/packs/linear-color-valentines-day-set).

![](.github/screenshot_small.png)

## Installation

In your terminal, go to your MagicMirror's Module folder:
````
cd ~/MagicMirror/modules
````

Clone this repository:
````
git clone https://github.com/morozgrafix/MMM-Valentine.git
````

Configure the module in your `config.js` file.

**Note:** After starting the Mirror, it will take a few seconds before the valentine themed icons begin to fall ...

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: 'MMM-Valentine',
		position: 'fullscreen_above',
		config: {
			// See 'Configuration options' for more information.
		}
	}
]
````

## Configuration options

The following property can be configured:


<table width="100%">
	<thead>
		<tr>
			<th>Option</th>
			<th width="100%">Description</th>
		</tr>
	<thead>
	<tbody>
		<tr>
			<td><code>valentinesCount</code></td>
			<td>The number of valentine themed icons to fall. More icons are havier for the cpu, so don't go wild.
				<br><b>Default value:</b> <code>50</code>
			</td>
		</tr>
		<tr>
			<td><code>valentinesSize</code></td>
			<td>Scale ratio for each icon, to help adjustments for different screen resolutions.
				<br><b>Default value:</b> <code>1.00</code>
			</td>
		</tr>
	</tbody>
</table>
