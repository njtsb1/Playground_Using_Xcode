//
//  CustomTableViewCell.swift
//  Movie-Picks
//
//  Created by Rohit Emmadishetty on 10/05/26.
//  Copyright © 2026 Rohit Emmadishetty. All rights reserved.
//

import UIKit

class CustomTableViewCell: UITableViewCell {
    
    @IBOutlet var movieImageView: UIImageView!
    @IBOutlet var movieTitle: UILabel!
    @IBOutlet var movieYear: UILabel!

    override func awakeFromNib() {
        super.awakeFromNib()
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)
    }
}
