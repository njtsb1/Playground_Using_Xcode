//
//  Movie.swift
//  Movie-Picks
//
//  Created by Rohit Emmadishetty on 10/05/26.
//  Copyright © 2026 Rohit Emmadishetty. All rights reserved.
//

import Foundation

class Movie {
    
    var id: String
    let firstName: String = "Steve"
    var lastName: String? = "Jobs" // Optional String as required by the challenge
    var year: String
    var imageUrl: String
    var plot: String
    
    init(id: String, year: String, imageUrl: String, plot: String) {
        self.id = id
        self.year = year
        self.imageUrl = imageUrl
        self.plot = plot
        
        // Challenge Part 1: String interpolation with a default value of "Wozniak"
        print("The name of the APPLE founder is \(firstName) \(lastName ?? "Wozniak")")
        
        // Challenge Part 2: Optional Binding to unwrap the optional variable
        if let unwrappedLastName = lastName {
            print("The name of the APPLE co-founder via binding is \(firstName) \(unwrappedLastName)")
        }
    }
}
