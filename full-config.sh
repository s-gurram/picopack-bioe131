#!/bin/bash

# Define error handler
handle_error() {
    echo "Error: $1"
    exit 1
}

# 1. Add Enterovirus 70 (GCA_031102585.1) data
echo "Adding Enterovirus 70 (GCA_031102585.1) data to JBrowse2"
ASSEMBLY_NAME_ED70="Enterovirus 70"

# Download and process the .fa file
wget -O ed70.fa.gz ftp://ftp.ncbi.nlm.nih.gov/genomes/all/GCA/031/102/585/GCA_031102585.1_ASM3110258v1/GCA_031102585.1_ASM3110258v1_genomic.fna.gz || handle_error "Failed to download ed70.fa.gz"
gunzip ed70.fa.gz || handle_error "Failed to unzip ed70.fa.gz"
samtools faidx ed70.fa || handle_error "Failed to index ed70.fa"
jbrowse add-assembly ed70.fa --out $APACHE_ROOT/jbrowse2 --load copy --name "$ASSEMBLY_NAME_ED70" || handle_error "Failed to add assembly to JBrowse2"

# Download and process the .gff file
wget -O ed70_unsorted.gff.gz ftp://ftp.ncbi.nlm.nih.gov/genomes/all/GCA/031/102/585/GCA_031102585.1_ASM3110258v1/GCA_031102585.1_ASM3110258v1_genomic.gff.gz || handle_error "Failed to download ed70_unsorted.gff.gz"
gunzip ed70_unsorted.gff.gz || handle_error "Failed to unzip ed70_unsorted.gff.gz"
jbrowse sort-gff ed70_unsorted.gff > ed70.gff || handle_error "Failed to sort GFF file"
bgzip ed70.gff || handle_error "Failed to bgzip ed70.gff"
tabix ed70.gff.gz || handle_error "Failed to create tabix index for ed70.gff.gz"
jbrowse add-track ed70.gff.gz --out $APACHE_ROOT/jbrowse2 --load copy -a "$ASSEMBLY_NAME_ED70" --name "$ASSEMBLY_NAME_ED70" || handle_error "Failed to add GFF track to JBrowse2"

# 2. Add Coxsackievirus A24 (GCA_031102575.1) data
echo "Adding Coxsackievirus A24 (GCA_031102575.1) data to JBrowse2"
ASSEMBLY_NAME_C24="Coxsackievirus A24"

# Download and process the .fa file
wget -O c24.fa.gz ftp://ftp.ncbi.nlm.nih.gov/genomes/all/GCA/031/102/575/GCA_031102575.1_ASM3110257v1/GCA_031102575.1_ASM3110257v1_genomic.fna.gz || handle_error "Failed to download c24.fa.gz"
gunzip c24.fa.gz || handle_error "Failed to unzip c24.fa.gz"
samtools faidx c24.fa || handle_error "Failed to index c24.fa"
jbrowse add-assembly c24.fa --out $APACHE_ROOT/jbrowse2 --load copy -a "$ASSEMBLY_NAME_C24" --name "$ASSEMBLY_NAME_C24" || handle_error "Failed to add assembly to JBrowse2"

# Download and process the .gff file
wget -O c24_unsorted.gff.gz ftp://ftp.ncbi.nlm.nih.gov/genomes/all/GCA/031/102/575/GCA_031102575.1_ASM3110257v1/GCA_031102575.1_ASM3110257v1_genomic.gff.gz || handle_error "Failed to download c24_unsorted.gff.gz"
gunzip c24_unsorted.gff.gz || handle_error "Failed to unzip c24_unsorted.gff.gz"
jbrowse sort-gff c24_unsorted.gff > c24.gff || handle_error "Failed to sort GFF file"
bgzip c24.gff || handle_error "Failed to bgzip c24.gff"
tabix c24.gff.gz || handle_error "Failed to create tabix index for c24.gff.gz"
jbrowse add-track c24.gff.gz --out $APACHE_ROOT/jbrowse2 --load copy -a "$ASSEMBLY_NAME_C24" --name "$ASSEMBLY_NAME_C24" || handle_error "Failed to add GFF track to JBrowse2"

# 3. Add Coxsackievirus A16 (GCA_031106005.1) data
echo "Adding Coxsackievirus A16 (GCA_031106005.1) data to JBrowse2"
ASSEMBLY_NAME_C16="Coxsackievirus A16"

# Download and process the .fa file
wget -O c16.fa.gz ftp://ftp.ncbi.nlm.nih.gov/genomes/all/GCA/031/106/005/GCA_031106005.1_ASM3110600v1/GCA_031106005.1_ASM3110600v1_genomic.fna.gz || handle_error "Failed to download c16.fa.gz"
gunzip c16.fa.gz || handle_error "Failed to unzip c16.fa.gz"
samtools faidx c16.fa || handle_error "Failed to index c16.fa"
jbrowse add-assembly c16.fa --out $APACHE_ROOT/jbrowse2 --load copy -a "$ASSEMBLY_NAME_C16" --name "$ASSEMBLY_NAME_C16" || handle_error "Failed to add assembly to JBrowse2"

# Download and process the .gff file
wget -O c16_unsorted.gff.gz ftp://ftp.ncbi.nlm.nih.gov/genomes/all/GCA/031/106/005/GCA_031106005.1_ASM3110600v1/GCA_031106005.1_ASM3110600v1_genomic.gff.gz || handle_error "Failed to download c16_unsorted.gff.gz"
gunzip c16_unsorted.gff.gz || handle_error "Failed to unzip c16_unsorted.gff.gz"
jbrowse sort-gff c16_unsorted.gff > c16.gff || handle_error "Failed to sort GFF file"
bgzip c16.gff || handle_error "Failed to bgzip c16.gff"
tabix c16.gff.gz || handle_error "Failed to create tabix index for c16.gff.gz"
jbrowse add-track c16.gff.gz --out $APACHE_ROOT/jbrowse2 --load copy  -a "$ASSEMBLY_NAME_C16" --name "$ASSEMBLY_NAME_C16" || handle_error "Failed to add GFF track to JBrowse2"

# 4. Add Coxsackievirus A6 (GCA_031113095.1) data
echo "Adding Coxsackievirus A6 (GCA_031113095.1) data to JBrowse2"
ASSEMBLY_NAME_C6="Coxsackievirus A6"

# Download and process the .fa file
wget -O c6.fa.gz ftp://ftp.ncbi.nlm.nih.gov/genomes/all/GCA/031/113/095/GCA_031113095.1_ASM3111309v1/GCA_031113095.1_ASM3111309v1_genomic.fna.gz || handle_error "Failed to download c6.fa.gz"
gunzip c6.fa.gz || handle_error "Failed to unzip c6.fa.gz"
samtools faidx c6.fa || handle_error "Failed to index c6.fa"
jbrowse add-assembly c6.fa --out $APACHE_ROOT/jbrowse2 --load copy -a "$ASSEMBLY_NAME_C6" --name "$ASSEMBLY_NAME_C6"|| handle_error "Failed to add assembly to JBrowse2"

# Download and process the .gff file
wget -O c6_unsorted.gff.gz ftp://ftp.ncbi.nlm.nih.gov/genomes/all/GCA/031/113/095/GCA_031113095.1_ASM3111309v1/GCA_031113095.1_ASM3111309v1_genomic.gff.gz || handle_error "Failed to download c6_unsorted.gff.gz"
gunzip c6_unsorted.gff.gz || handle_error "Failed to unzip c6_unsorted.gff.gz"
jbrowse sort-gff c6_unsorted.gff > c6.gff || handle_error "Failed to sort GFF file"
bgzip c6.gff || handle_error "Failed to bgzip c6.gff"
tabix c6.gff.gz || handle_error "Failed to create tabix index for c6.gff.gz"
jbrowse add-track c6.gff.gz --out $APACHE_ROOT/jbrowse2 --load copy -a "$ASSEMBLY_NAME_C6" --name "$ASSEMBLY_NAME_C6" || handle_error "Failed to add GFF track to JBrowse2"

# 5. Add Echovirus 13 (GCF_008799755.1) data
echo "Adding Echovirus 13 (GCF_008799755.1) data to JBrowse2"
ASSEMBLY_NAME_EC13="Echovirus 13"

# Download and process the .fa file
wget -O ec13.fa.gz ftp://ftp.ncbi.nlm.nih.gov/genomes/all/GCF/008/799/755/GCF_008799755.1_ASM879975v1/GCF_008799755.1_ASM879975v1_genomic.fna.gz || handle_error "Failed to download ec13.fa.gz"
gunzip ec13.fa.gz || handle_error "Failed to unzip ec13.fa.gz"
samtools faidx ec13.fa || handle_error "Failed to index ec13.fa"
jbrowse add-assembly ec13.fa --out $APACHE_ROOT/jbrowse2 --load copy -a "$ASSEMBLY_NAME_EC13" --name "$ASSEMBLY_NAME_EC13" || handle_error "Failed to add assembly to JBrowse2"

# Download and process the .gff file
wget -O ec13_unsorted.gff.gz ftp://ftp.ncbi.nlm.nih.gov/genomes/all/GCF/008/799/755/GCF_008799755.1_ASM879975v1/GCF_008799755.1_ASM879975v1_genomic.gff.gz || handle_error "Failed to download ec13_unsorted.gff.gz"
gunzip ec13_unsorted.gff.gz || handle_error "Failed to unzip ec13_unsorted.gff.gz"
jbrowse sort-gff ec13_unsorted.gff > ec13.gff || handle_error "Failed to sort GFF file"
bgzip ec13.gff || handle_error "Failed to bgzip ec13.gff"
tabix ec13.gff.gz || handle_error "Failed to create tabix index for ec13.gff.gz"
jbrowse add-track ec13.gff.gz --out $APACHE_ROOT/jbrowse2 --load copy -a "$ASSEMBLY_NAME_EC13" --name "$ASSEMBLY_NAME_EC13" || handle_error "Failed to add GFF track to JBrowse2"

# 6. Add Echovirus 18 (GCF_008800315.1) data
echo "Adding Echovirus 18 (GCF_008800315.1) data to JBrowse2"
ASSEMBLY_NAME_EC18="Echovirus 18"

# Download and process the .fa file
wget -O ec18.fa.gz ftp://ftp.ncbi.nlm.nih.gov/genomes/all/GCF/008/800/315/GCF_008800315.1_ASM880031v1/GCF_008800315.1_ASM880031v1_genomic.fna.gz || handle_error "Failed to download ec18.fa.gz"
gunzip ec18.fa.gz || handle_error "Failed to unzip ec18.fa.gz"
samtools faidx ec18.fa || handle_error "Failed to index ec18.fa"
jbrowse add-assembly ec18.fa --out $APACHE_ROOT/jbrowse2 --load copy -a "$ASSEMBLY_NAME_EC18" --name "$ASSEMBLY_NAME_EC18" || handle_error "Failed to add assembly to JBrowse2"

# Download and process the .gff file
wget -O ec18_unsorted.gff.gz ftp://ftp.ncbi.nlm.nih.gov/genomes/all/GCF/008/800/315/GCF_008800315.1_ASM880031v1/GCF_008800315.1_ASM880031v1_genomic.gff.gz || handle_error "Failed to download ec18_unsorted.gff.gz"
gunzip ec18_unsorted.gff.gz || handle_error "Failed to unzip ec18_unsorted.gff.gz"
jbrowse sort-gff ec18_unsorted.gff > ec18.gff || handle_error "Failed to sort GFF file"
bgzip ec18.gff || handle_error "Failed to bgzip ec18.gff"
tabix ec18.gff.gz || handle_error "Failed to create tabix index for ec18.gff.gz"
jbrowse add-track ec18.gff.gz --out $APACHE_ROOT/jbrowse2 --load copy -a "$ASSEMBLY_NAME_EC18" --name "$ASSEMBLY_NAME_EC18" || handle_error "Failed to add GFF track to JBrowse2"

# 7. Add Echovirus 30 (GCA_031109315.1) data
echo "Adding Echovirus 30 (GCA_031109315.1) data to JBrowse2"
ASSEMBLY_NAME_EC30="Echovirus 30"

# Download and process the .fa file
wget -O ec30.fa.gz ftp://ftp.ncbi.nlm.nih.gov/genomes/all/GCA/031/109/315/GCA_031109315.1_ASM3110931v1/GCA_031109315.1_ASM3110931v1_genomic.fna.gz || handle_error "Failed to download ec30.fa.gz"
gunzip ec30.fa.gz || handle_error "Failed to unzip ec30.fa.gz"
samtools faidx ec30.fa || handle_error "Failed to index ec30.fa"
jbrowse add-assembly ec30.fa --out $APACHE_ROOT/jbrowse2 --load copy -a "$ASSEMBLY_NAME_EC30" --name "$ASSEMBLY_NAME_EC30"|| handle_error "Failed to add assembly to JBrowse2"

# Download and process the .gff file
wget -O ec30_unsorted.gff.gz ftp://ftp.ncbi.nlm.nih.gov/genomes/all/GCA/031/109/315/GCA_031109315.1_ASM3110931v1/GCA_031109315.1_ASM3110931v1_genomic.gff.gz || handle_error "Failed to download ec30_unsorted.gff.gz"
gunzip ec30_unsorted.gff.gz || handle_error "Failed to unzip ec30_unsorted.gff.gz"
jbrowse sort-gff ec30_unsorted.gff > ec30.gff || handle_error "Failed to sort GFF file"
bgzip ec30.gff || handle_error "Failed to bgzip ec30.gff"
tabix ec30.gff.gz || handle_error "Failed to create tabix index for ec30.gff.gz"
jbrowse add-track ec30.gff.gz --out $APACHE_ROOT/jbrowse2 --load copy -a "$ASSEMBLY_NAME_EC30" --name "$ASSEMBLY_NAME_EC30" || handle_error "Failed to add GFF track to JBrowse2"

# Create text index for JBrowse2
jbrowse text-index --out $APACHE_ROOT/jbrowse2 || handle_error "Failed to create text index for JBrowse2"

# Define output directory
OUTPUT_DIR="$APACHE_ROOT/jbrowse2"

# Combine all sequences into one big assembly
ASSEMBLY_NAME="Combined_Viral_Assembly"

# Create a temporary file to store all genome sequences in one FASTA file
cat ed70.fa c24.fa c16.fa c6.fa ec13.fa ec18.fa ec30.fa > combined_genomes.fa || handle_error "Failed to combine genome sequences"

# Download and process the .fa files
samtools faidx combined_genomes.fa || handle_error "Failed to index combined_genomes.fa"
jbrowse add-assembly combined_genomes.fa --out $OUTPUT_DIR --load copy --name "$ASSEMBLY_NAME" || handle_error "Failed to add combined assembly to JBrowse2"

# Create the combined GFF file for all genomes
cat ed70_unsorted.gff c24_unsorted.gff c16_unsorted.gff c6_unsorted.gff ec13_unsorted.gff ec18_unsorted.gff ec30_unsorted.gff > combined_genomes_unsorted.gff || handle_error "Failed to combine GFF files"
jbrowse sort-gff combined_genomes_unsorted.gff > combined_genomes.gff || handle_error "Failed to sort combined GFF file"
bgzip combined_genomes.gff || handle_error "Failed to bgzip combined_genomes.gff"
tabix combined_genomes.gff.gz || handle_error "Failed to create tabix index for combined_genomes.gff.gz"
jbrowse add-track combined_genomes.gff.gz --out $OUTPUT_DIR --load copy -a "$ASSEMBLY_NAME" --name "$ASSEMBLY_NAME" || handle_error "Failed to add combined GFF track to JBrowse2"

# Create text index for JBrowse2
jbrowse text-index --out $OUTPUT_DIR || handle_error "Failed to create text index for JBrowse2"

echo "All sequences and tracks successfully added to the combined assembly in JBrowse2!"


echo "All assemblies and tracks added to JBrowse2 successfully!"

# Change to the $APACHE_ROOT/jbrowse2 directory
cd "$APACHE_ROOT/jbrowse2" || { echo "Error: $APACHE_ROOT/jbrowse2 directory not found."; exit 1; }

CONFIG_FILE="config.json"
PLUGIN1="{\"name\": \"MsaView\", \"url\": \"https://unpkg.com/jbrowse-plugin-msaview/dist/jbrowse-plugin-msaview.umd.production.min.js\"}"
PLUGIN2="{\"name\": \"Protein3d\", \"url\": \"https://unpkg.com/jbrowse-plugin-protein3d/dist/jbrowse-plugin-protein3d.umd.production.min.js\"}"

# Check if config.json exists
if [[ ! -f "$CONFIG_FILE" ]]; then
  echo "$CONFIG_FILE not found!"
  exit 1
fi

# Create a backup of the config.json
cp "$CONFIG_FILE" "$CONFIG_FILE.bak"

# Check if "plugins" section exists
if ! grep -q "\"plugins\"" "$CONFIG_FILE"; then
  # If "plugins" doesn't exist, add it as a top-level section, ensuring it's separate from "tracks"
  if grep -q "\"tracks\"" "$CONFIG_FILE"; then
    # Insert plugins before the "tracks" section
    sed -i '' -e '/"tracks"/i\
    "plugins": [\
      '"$PLUGIN1"',\
      '"$PLUGIN2"'\
    ],' "$CONFIG_FILE"
  else
    # If no "tracks" section exists, append the plugins at the end of the file
    sed -i '' -e '$a\
    "plugins": [\
      '"$PLUGIN1"',\
      '"$PLUGIN2"'\
    ],' "$CONFIG_FILE"
  fi
else
  # If "plugins" section exists, append the new plugins to the existing "plugins" array
  sed -i '' -e '/"plugins"/s/\(\[.*\)/\1, '"$PLUGIN1"', '"$PLUGIN2"'/g' "$CONFIG_FILE"
fi

echo "Plugins added successfully to $CONFIG_FILE"





# Check if minimap2 is installed
if which minimap2 &>/dev/null; then
  echo "Minimap2 is already installed."
else
  # Check if Homebrew is installed
  if which brew &>/dev/null; then
    echo "Homebrew is installed. Installing minimap2..."
    brew install minimap2
    echo "Minimap2 installation complete."
  else
    echo "Homebrew is not installed. Installing Homebrew first..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    echo "Homebrew installation complete."
    echo "Now installing minimap2..."
    brew install minimap2
    echo "Minimap2 installation complete."
  fi
fi

# Creating .paf to compare Coxsackievirus A24 and Enterovirus 70
minimap2 -a ed70.fa c24.fa > ed70_c24.paf
jbrowse add-track ed70_c24.paf --trackType SyntenyTrack --assemblyNames "Enterovirus 70,Coxsackievirus A24" --load copy --out $APACHE_ROOT/jbrowse2

# Creating .paf to compare Coxsackievirus A6 and Coxsackievirus A16
minimap2 -a c6.fa c16.fa > c6_c16.paf
jbrowse add-track c6_c16.paf --trackType SyntenyTrack --assemblyNames "Coxsackievirus A6,Coxsackievirus A16" --load copy --out $APACHE_ROOT/jbrowse2

# Creating .paf to compare Echovirus 13 and Echovirus 18
minimap2 -a ec13.fa ec18.fa > ec13_ec18.paf
jbrowse add-track ec13_ec18.paf --trackType SyntenyTrack --assemblyNames "Echovirus 13,Echovirus 18" --load copy --out $APACHE_ROOT/jbrowse2


# Creating .paf to compare Echovirus 13 and Echovirus 30
minimap2 -a ec13.fa ec30.fa > ec13_ec30.paf
jbrowse add-track ec13_ec30.paf --trackType SyntenyTrack --assemblyNames "Echovirus 13,Echovirus 30" --load copy --out $APACHE_ROOT/jbrowse2

# Creating .paf to compare Echovirus 18 and Echovirus 30
minimap2 -a ec18.fa ec30.fa > ec18_ec30.paf
jbrowse add-track ec18_ec30.paf --trackType SyntenyTrack --assemblyNames "Echovirus 18,Echovirus 30" --load copy --out $APACHE_ROOT/jbrowse2
