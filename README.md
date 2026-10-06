# Creating a Playground Project in Xcode

Project developed during the Santander Bootcamp 2023 - Mobile iOS with Swift, under the guidance of specialist [Robson Moreira](https://github.com/robixnai "Robson Moreira").</br>
In this project challenge, we will practice the concepts learned during the courses in this Bootcamp. You can create the project in two parts in the Xcode playground: in the first, the goal is to explore the Object-Oriented Programming paradigm, and in the second, to apply OOP concepts.

## Swift and iOS Fundamentals

### The Challenge

- Create a playground project using Xcode.
- Define a _constant_ with the initial value "Steve".
- Define a _variable_ of type optional String with the initial value "Jobs".
- Write a print statement using string interpolation with the _constant_ and the _variable_, specifying a default value of "Wozniak" for the optional _variable_.
- Perform optional binding on the _variable_ and, within the condition, write another print statement using interpolation between the _constant_ and the unwrapped _variable_.

## Project Structure

The project layout follows standard iOS application development conventions:

* **`Movie-Picks/`**: Contains the source code files (`.swift`), user interface layers (`.storyboard`), and digital assets (`.xcassets`).
* **`Movie-Picks.xcodeproj/`**: Xcode project configuration wrapper containing structure definitions (`project.pbxproj`) and workspace metadata.

## Swift Fundamentals Challenge

Integrated into the initialization lifecycle of the `Movie` model is a dedicated bootcamp challenge focused on Swift basics and variable safety types:

1. **Constants**: Defines an immutable binding `firstName` with the starting value `"Steve"`.
2. **Optionals**: Explores safe handling of variables with an optional String property `lastName` initialized as `"Jobs"`.
3. **Nil-Coalescing Operator**: Implements a print statement evaluating string interpolation with a fallback default value of `"Wozniak"` if the optional reference is empty.
4. **Optional Binding (`if let`)**: Demystifies variable unwrapping by explicitly validating the memory reference inside a safe conditional execution block.

## Features

* **Custom TableView Configuration**: Displays visual movie lists leveraging layout recycling via `CustomTableViewCell`.
* **Asynchronous Image Loading**: Handles high-performance multi-threaded image loading from remote servers using background threads in `URLSession`.
* **Dynamic Content Search**: Prepared input terminal handling text ingestion ready to connect with AI-based movie suggestion models or external network APIs.

## Requirements

* **Development Environment**: Xcode 8.3.3 or higher
* **Programming Language**: Swift 3.3 / 4.x compatible
* **Platform Deployment Target**: iOS 10.0+

[LICENSE](/LICENSE)
